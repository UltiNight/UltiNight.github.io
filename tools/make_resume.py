"""Regenerate resume-ko.pdf and resume-en.pdf from the site itself.

Serves the site on a temporary local port and prints it with headless Edge (or Chrome),
so the PDFs always match js/content.js and the print styles in css/style.css.
"""
import http.server
import shutil
import socketserver
import subprocess
import threading
import time
from functools import partial
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
PORT = 8091
BROWSERS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
]


def find_browser():
    for path in BROWSERS:
        if Path(path).exists():
            return path
    found = shutil.which("msedge") or shutil.which("chrome")
    if not found:
        raise SystemExit("Edge or Chrome was not found.")
    return found


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def main():
    browser = find_browser()
    handler = partial(QuietHandler, directory=str(SITE))
    with socketserver.TCPServer(("127.0.0.1", PORT), handler) as server:
        threading.Thread(target=server.serve_forever, daemon=True).start()
        for lang in ("ko", "en"):
            out = SITE / f"resume-{lang}.pdf"
            out.unlink(missing_ok=True)
            subprocess.run(
                [browser, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                 "--virtual-time-budget=4000", f"--print-to-pdf={out}",
                 f"http://127.0.0.1:{PORT}/?lang={lang}"],
                check=False, capture_output=True,
            )
            # headless browsers can return before the file is written
            for _ in range(60):
                if out.exists() and out.stat().st_size > 0:
                    break
                time.sleep(0.5)
            print(out.name, out.stat().st_size // 1024, "KB" if out.exists() else "MISSING")
        server.shutdown()


if __name__ == "__main__":
    main()
