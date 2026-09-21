"""Convert the Hyperphantasia editor captures to web-sized WebP.

The skin work screenshots (assets/skins/krita-full.webp, assets/poses/blender-full.webp)
and the part-select / paint screens (hyperphantasia-select.webp, hyperphantasia-paint.webp)
are placed by hand. Original texture files are never copied into this folder.
"""
from pathlib import Path

from PIL import Image

SHOTS = Path(r"C:\HFF\MDI\Hyperphantasia\captures")
OUT = Path(__file__).resolve().parent.parent / "assets" / "projects"


def shot(name, out_name, width=1400):
    im = Image.open(SHOTS / name).convert("RGB")
    im.thumbnail((width, width), Image.LANCZOS)
    out = OUT / out_name
    im.save(out, "WEBP", quality=82, method=6)
    print(out.name, out.stat().st_size // 1024, "KB")


if __name__ == "__main__":
    shot("hyperphantasia-current-three-quarter.png", "hyperphantasia.webp")
