/* All site copy lives here. Add a project by appending to PROJECTS. */

const I18N = {
  ko: {
    "nav.skip": "본문으로 건너뛰기",
    "site.name": "김욱동 (Ultinight)",
    "nav.about": "소개",
    "nav.ta": "테크니컬 아트",
    "nav.re": "리버스 엔지니어링",
    "nav.auto": "웹·자동화",
    "nav.school": "수업",
    "nav.contact": "연락",

    "hero.eyebrow": "Portfolio",
    "hero.title": "어떻게 만들었는지 궁금해서, 직접 만들어 봅니다.",
    "hero.lead":
      "게임을 하다 보면 '이 기능은 어떻게 만들었을까' 궁금해질 때가 많았습니다. 그 답을 직접 찾아보려고 Unity와 C#으로 게임 구조를 뜯어보고, 그 위에 스킨을 그리고 도구를 만들었습니다. 지금은 테크니컬 아티스트나 리버스 엔지니어가 되고 싶습니다.",
    "hero.cta.work": "작업물 보기",
    "hero.cta.resume": "이력서 PDF",

    "about.title": "소개",
    "about.stack": "사용 기술",
    "about.p1":
      "저는 김욱동입니다. 완성된 결과물보다, 그것이 어떻게 만들어졌는지가 늘 더 궁금했습니다. 게임을 할 때도 이 기능이 어떤 원리로 돌아가는지, 안쪽은 어떻게 짜여 있는지부터 떠올렸습니다.",
    "about.p2":
      "그 호기심이 Unity와 C#으로 이어졌습니다. 게임을 열어 구조를 파악하고, 그 위에 기능과 도구를 직접 만들어 봤습니다.",

    "ta.title": "테크니컬 아트",
    "ta.desc":
      "스킨 텍스처를 그리고, 스킨을 만드는 3D 에디터를 만들고, Blender로 포즈도 잡아 봤습니다. 셰이더 작업은 수업 프로젝트 TechmoUP에서 볼 수 있습니다.",
    "re.title": "리버스 엔지니어링 · 보안 도구",
    "re.desc":
      "Unity Mono와 .NET 게임이 코드를 어떻게 불러오는지 알아보면서 만든 로더, 난독화 도구, 실행 추적 기반 역분석 플랫폼입니다.",
    "disclaimer":
      "Human: Fall Flat은 No Brakes Games의 게임이고, 이 사이트와는 관련이 없습니다. 게임 자산, 모드 실행 파일, 소스 코드는 싣지 않았습니다.",
    "auto.title": "웹 · 봇 · 자동화",
    "auto.desc": "반복 작업과 운영 부담을 덜려고 만든 브라우저 확장, 데스크톱 앱, Discord 봇입니다.",

    "skins.title": "스킨 제작 과정",
    "skins.desc":
      "Human: Fall Flat 커스텀 스킨은 Krita에서 3,072×3,072 UV 텍스처로 직접 그립니다. 다 그린 스킨은 Blender에서 포즈를 잡아 어떻게 보이는지 확인합니다.",
    "skins.notice":
      "텍스처 원본 파일은 공개하지 않습니다. 여기 실린 이미지는 작업 화면 캡처이고, 스킨 아트워크의 저작권은 Ultinight / L.U.N.E.S.에게 있습니다.",
    "skins.open": "크게 보기",
    "skins.krita": "Krita 텍스처 작업",
    "skins.krita.desc": "스킨 텍스처를 레이어로 나눠 그리는 작업 화면입니다. 이미지를 누르면 크게 볼 수 있습니다.",
    "skins.poses": "Blender 포즈 작업",
    "skins.poses.desc": "스킨을 입힌 캐릭터에 Blender로 포즈를 잡는 작업 화면입니다. 다른 자세에서 스킨이 어떻게 보이는지 확인했습니다.",


    "lab.title": "브라우저에서 써 보기",
    "lab.desc": "Hypercalculia 봇의 변환 도구를 웹에서 바로 쓰도록 옮겨 본 미니 버전입니다. 입력한 값은 이 브라우저 안에서만 처리됩니다.",
    "lab.tab.number": "진법 변환",
    "lab.tab.float": "IEEE754",
    "lab.tab.text": "텍스트 ↔ Hex/Base64",
    "lab.input": "입력",
    "lab.number.hint": "10진수, 0x 16진수, 0b 2진수, 0o 8진수를 넣으세요. 예: 0xdeadbeef",
    "lab.float.hint": "소수(3.14) 또는 4/8바이트 hex(c3 f5 48 40, 리틀 엔디언)를 넣으세요.",
    "lab.text.hint": "입력 형식을 고르고 값을 넣으면 나머지 표현이 나옵니다.",
    "lab.from": "입력 형식",
    "lab.invalid": "해석할 수 없는 입력입니다.",
    "lab.bytes": "바이트",



    "school.title": "대학교 수업 프로젝트",
    "school.desc":
      "대학교 수업에서 진행한 웹, AI, 그래픽스 프로젝트입니다. 팀으로 한 프로젝트에는 제가 맡은 부분을 적어 두었습니다.",

    "contact.title": "연락",
    "contact.desc": "협업이나 문의는 GitHub로 남겨 주세요. 이력서는 PDF로 내려받을 수 있습니다.",
    "footer.note": "정적 HTML/CSS/JS로 제작",
    "footer.icons": "기술 아이콘은 Simple Icons(CC0)를 썼고, 각 로고의 상표권은 소유자에게 있습니다.",

    "label.stack": "기술",
    "label.status": "상태",
    "label.private": "비공개 저장소",
    "label.play": "브라우저에서 플레이",
    "label.course": "수업",
    "label.period": "기간",
    "label.team": "팀",
    "label.role": "담당",
    "label.highlights": "주요 기능",
    "fact.projects": "프로젝트",
    "fact.re": "리버스 엔지니어링 도구",
    "fact.school": "수업 프로젝트",
    "fact.langs": "주 언어",
  },

  en: {
    "nav.skip": "Skip to content",
    "site.name": "Wookdong Kim (Ultinight)",
    "nav.about": "About",
    "nav.ta": "Technical Art",
    "nav.re": "Reverse Engineering",
    "nav.auto": "Web & Automation",
    "nav.school": "Coursework",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio",
    "hero.title": "I get curious how things are made, so I build them myself.",
    "hero.lead":
      "Playing games, I often wonder how a feature was actually made. To find out, I've taken games apart with Unity and C#, painted skins, and built tools. Right now I'm aiming to become a technical artist or a reverse engineer.",
    "hero.cta.work": "View work",
    "hero.cta.resume": "Résumé (PDF)",

    "about.title": "About",
    "about.stack": "Tech stack",
    "about.p1":
      "I'm Wookdong Kim. I've always been more curious about how something is made than about the finished result. Even while playing a game, I'd think about how a feature works and how it's put together underneath.",
    "about.p2":
      "That curiosity led me to Unity and C#. I opened games up, worked out their structure, then built features and tools on top.",

    "ta.title": "Technical Art",
    "ta.desc":
      "I paint skin textures, build a 3D editor for making skins, and pose characters in Blender. My shader work is in the coursework project TechmoUP.",
    "re.title": "Reverse Engineering & Security Tools",
    "re.desc":
      "A loader, an obfuscator and a trace-based analysis platform, all built while working out how Unity Mono and .NET games load code.",
    "disclaimer":
      "Human: Fall Flat is a game by No Brakes Games and has nothing to do with this site. Game assets, mod executables and source code are not included.",
    "auto.title": "Web, Bots & Automation",
    "auto.desc": "A browser extension, a desktop app and Discord bots I made to cut down on repetitive work and admin overhead.",

    "skins.title": "How a Skin Is Made",
    "skins.desc":
      "I paint custom Human: Fall Flat skins by hand as 3,072×3,072 UV textures in Krita, then pose them in Blender to check how they look.",
    "skins.notice":
      "I don't publish the original texture files. The images here are screenshots of my workspace. Skin artwork is © Ultinight / L.U.N.E.S.",
    "skins.open": "View larger",
    "skins.krita": "Krita Texture Work",
    "skins.krita.desc": "My workspace while painting a skin texture across several layers. Select the image to enlarge it.",
    "skins.poses": "Blender Pose Work",
    "skins.poses.desc": "My Blender workspace, posing characters wearing the skins to check how they look outside the T-pose.",


    "lab.title": "Try it in the browser",
    "lab.desc": "A mini version of the Hypercalculia bot's converters, running right on this page. Your input is processed only inside this browser.",
    "lab.tab.number": "Base conversion",
    "lab.tab.float": "IEEE754",
    "lab.tab.text": "Text ↔ Hex/Base64",
    "lab.input": "Input",
    "lab.number.hint": "Enter decimal, 0x hex, 0b binary or 0o octal. Example: 0xdeadbeef",
    "lab.float.hint": "Enter a number (3.14) or 4/8 bytes of hex (c3 f5 48 40, little-endian).",
    "lab.text.hint": "Pick the input format and type a value to see the other representations.",
    "lab.from": "Input format",
    "lab.invalid": "Could not parse that input.",
    "lab.bytes": "Bytes",



    "school.title": "University Coursework",
    "school.desc":
      "Web, AI and graphics projects from my university classes. For team projects, I note the part I worked on.",

    "contact.title": "Contact",
    "contact.desc": "For collaboration or questions, reach out through GitHub. A résumé is available as a PDF.",
    "footer.note": "Built with plain HTML/CSS/JS",
    "footer.icons": "Technology icons from Simple Icons (CC0). Logos are trademarks of their owners.",

    "label.stack": "Stack",
    "label.status": "Status",
    "label.private": "Private repository",
    "label.play": "Play in browser",
    "label.course": "Course",
    "label.period": "Period",
    "label.team": "Team",
    "label.role": "My part",
    "label.highlights": "Highlights",
    "fact.projects": "Projects",
    "fact.re": "Reverse engineering tools",
    "fact.school": "Coursework projects",
    "fact.langs": "Main languages",
  },
};

/* name, brand colour, optional icon file in assets/icons (Simple Icons, CC0). No icon = coloured chip only. */
const STACK = [
  { name: "C#", color: "#9B4F96" },
  { name: ".NET 8 / Framework 4.8", color: "#512BD4", icon: "dotnet" },
  { name: "Unity (Mono)", color: "#222222", icon: "unity" },
  { name: "Blender", color: "#E87D0D", icon: "blender" },
  { name: "Krita", color: "#3BABFF", icon: "krita" },
  { name: "HLSL", color: "#0078D4" },
  { name: "IDA", color: "#C8102E" },
  { name: "x86-64 Assembly", color: "#5B6B7A" },
  { name: ".NET Reverse Engineering", color: "#7C3AED" },
  { name: "Harmony", color: "#A855F7" },
  { name: "Doorstop", color: "#0EA5E9" },
  { name: "JavaScript", color: "#F7DF1E", icon: "javascript" },
  { name: "Node.js", color: "#5FA04E", icon: "nodedotjs" },
  { name: "React", color: "#61DAFB", icon: "react" },
  { name: "MongoDB", color: "#47A248", icon: "mongodb" },
  { name: "Electron", color: "#47848F", icon: "electron" },
  { name: "Three.js", color: "#111111", icon: "threedotjs" },
  { name: "Python", color: "#3776AB", icon: "python" },
  { name: "Streamlit", color: "#FF4B4B", icon: "streamlit" },
  { name: "FastAPI", color: "#009688", icon: "fastapi" },
  { name: "MySQL", color: "#4479A1", icon: "mysql" },
  { name: "Docker", color: "#2496ED", icon: "docker" },
  { name: "PowerShell", color: "#2671BE" },
  { name: "Chrome Extensions (MV3)", color: "#4285F4", icon: "googlechrome" },
  { name: "Discord API", color: "#5865F2", icon: "discord" },
];

/*
 * group: ta | re | auto | school
 * repo:  set to a public GitHub URL to show a link; leave null while the repo is private.
 */
const PROJECTS = [
  {
    id: "hyperphantasia",
    group: "ta",
    gallery: [
      { src: "assets/projects/hyperphantasia.webp", label: { ko: "사선", en: "3/4" } },
      { src: "assets/projects/hyperphantasia-front.webp", label: { ko: "앞", en: "Front" } },
      { src: "assets/projects/hyperphantasia-back.webp", label: { ko: "뒤", en: "Back" } },
    ],
    name: "Hyperphantasia",
    tagline: { ko: "Human: Fall Flat 스킨 제작용 3D 에디터", en: "3D skin editor for Human: Fall Flat" },
    desc: {
      ko: "인게임 프리셋의 텍스처를 그림판이나 Krita로 고치면 빨갛거나 하얀 물음표 오류가 떠서, 스킨 제작이 불편하고 작업이 늦어졌습니다. 이를 해결하려고 직접 만든 에디터입니다.",
      en: "Editing an in-game preset's texture in Paint or Krita showed a red or white question mark, which made skin work awkward and slow. I built this editor to fix that.",
    },
    highlights: {
      ko: [
        "인게임에 넣기 전에 게임과 같은 UV의 실제 모델에서 결과를 먼저 확인합니다",
        "RGB 마스크로 고른 영역은 칠해지지 않게 보호합니다",
        "수정한 파츠는 ModelFull.png처럼 게임과 같은 이름의 PNG로 내보냅니다",
      ],
      en: [
        "Check the result on the real model, with the game's own UV, before it goes in game",
        "RGB masks protect the areas you choose from being painted over",
        "Modified parts export as PNGs with the game's own names, such as ModelFull.png",
      ],
    },
    stack: ["Electron", "Three.js", "FBX", "Windows"],
    status: { ko: "v0.4 개발 중", en: "v0.4 in development" },
    repo: null,
  },
  {
    id: "pluto",
    group: "re",
    name: "PLUTO",
    tagline: { ko: "Unity Mono 게임에 코드를 불러오는 프레임워크", en: "A framework for loading code into Unity Mono games" },
    desc: {
      ko: "핵심 모듈, Doorstop 진입점, 페이로드 인젝터, 단일 .exe 인스톨러의 네 부분으로 나눠 직접 만든 로딩 구조입니다.",
      en: "A loading path I built myself in four parts: a core module, a Doorstop entry point, a payload injector and a single-.exe installer.",
    },
    highlights: {
      ko: ["게임이 시작되면 Doorstop을 거쳐 Unity 엔진에 코드가 로드됩니다", "Harmony 같은 종속성을 내장해 설치 파일 하나로 끝납니다"],
      en: ["At launch, a Doorstop entry point loads code into the Unity engine", "Dependencies such as Harmony are embedded, so one installer file is enough"],
    },
    stack: ["C#", ".NET Framework 4.8", "Harmony", "Doorstop"],
    status: { ko: "프로토타입", en: "Prototype" },
    repo: null,
  },
  {
    id: "lunesys",
    group: "re",
    name: "LUNESYS",
    tagline: { ko: "로딩 체인과 설치 도구", en: "Loading chain and installer" },
    desc: {
      ko: "게임이 시작되면 WinHTTP 프록시 DLL이 런처를 자동 실행하는 로딩 체인, 인젝터, Discord OAuth 설치 도구를 묶은 툴체인입니다.",
      en: "A toolchain of a loading chain where a WinHTTP proxy DLL auto-starts a launcher, an injector and a Discord OAuth installer.",
    },
    highlights: {
      ko: ["로딩 체인과 설치 과정을 나눠 설치를 단순하게 했습니다", "PowerShell로 빌드·배포 스크립트를 작성했습니다"],
      en: ["Keeping the loading chain and the install process apart keeps installing simple", "PowerShell build and deploy scripts"],
    },
    stack: ["C#", "Doorstop", "PowerShell", "Discord OAuth"],
    repo: null,
  },
  {
    id: "dyslexia",
    group: "re",
    shot: {
      src: "assets/projects/dyslexia.webp",
      alt: { ko: "Dyslexia GUI에서 난독화를 실행한 결과 화면", en: "The Dyslexia GUI after running an obfuscation" },
      caption: {
        ko: "GUI로 자체 어셈블리를 난독화하고 결과 DLL을 검증한 실행 화면입니다.",
        en: "The GUI obfuscating its own assembly, then verifying the output DLL.",
      },
    },
    name: "Dyslexia",
    tagline: { ko: "Unity에 안전한 .NET 이름 난독화 도구", en: "Unity-safe .NET rename obfuscator" },
    desc: {
      ko: "Unity Mono 어셈블리에 맞춘 보수적인 난독화 도구입니다. 드라이런 계획을 먼저 만들고, 별도 출력 DLL에만 적용한 뒤 결과를 검증합니다.",
      en: "A conservative obfuscator for Unity Mono assemblies. It writes a dry-run plan first, applies only to a separate output DLL, then verifies the result.",
    },
    highlights: {
      ko: [
        "원본 DLL은 절대 덮어쓰지 않습니다",
        "Unity 콜백, 직렬화 필드, 리플렉션 연결은 이름을 바꾸지 않고 보호합니다",
        "문자열 암호화 같은 보호 기능은 원할 때만 켭니다",
      ],
      en: [
        "The input DLL is never overwritten",
        "Unity callbacks, serialized fields and reflection links are protected, not renamed",
        "Protection passes such as string encryption are opt-in",
      ],
    },
    stack: ["C#", ".NET 8", "Unity Mono", "MIT"],
    status: { ko: "v1.0.0", en: "v1.0.0" },
    repo: null,
  },
  {
    id: "retrograde",
    group: "re",
    shot: {
      src: "assets/projects/retrograde.webp",
      alt: { ko: "Retrograde 데스크톱 화면", en: "The Retrograde desktop window" },
      caption: {
        ko: "예제 바이너리(branching.exe)를 분석하는 데스크톱 앱 실행 화면입니다.",
        en: "The desktop app analyzing a test binary (branching.exe).",
      },
    },
    name: "Project Retrograde",
    tagline: { ko: "실행 추적 기반 역분석 플랫폼", en: "Trace-based reverse engineering platform" },
    desc: {
      ko: "정적 분석과 실행 추적으로 값과 제어 흐름이 왜 그렇게 되었는지 설명합니다. 값의 출처를 거슬러 올라가고, 두 실행이 처음 갈라지는 지점을 찾습니다.",
      en: "Combines static analysis with execution traces to explain why a value or branch came to be. It traces where a value came from and finds where two runs first diverge.",
    },
    highlights: {
      ko: ["Windows x86-64 PE를 불러와 디스어셈블, CFG, 교차 참조를 볼 수 있습니다", "관찰한 사실, 추론, 확정한 지식을 나눠서 저장합니다"],
      en: ["Loads Windows x86-64 PE files with disassembly, CFG and cross-references", "Keeps observed facts, inferences and confirmed knowledge separate"],
    },
    stack: ["Python", "x86-64", "PE"],
    status: { ko: "MVP 설계·구현 중", en: "MVP in progress" },
    repo: null,
  },
  {
    id: "stackflip",
    group: "auto",
    name: "StackFlip",
    tagline: { ko: "실패를 격리하는 모듈형 Chromium 확장", en: "A modular Chromium extension that isolates failure" },
    desc: {
      ko: "Starblast.io용 Manifest V3 확장입니다. 기능마다 모듈을 따로 두어, 게임이 업데이트되어 한 기능이 깨져도 나머지는 계속 동작합니다.",
      en: "A Manifest V3 extension for Starblast.io. Each feature is its own module, so when a game update breaks one, the rest keep working.",
    },
    highlights: {
      ko: ["설정 패널과 진단 리포트 복사 기능(민감 정보는 제외)", "페이지 컨텍스트 스크립트와 확장 컨텍스트를 분리했습니다"],
      en: ["A settings panel and a copyable diagnostic report that leaves out sensitive data", "Page-context scripts are separated from the extension context"],
    },
    stack: ["JavaScript", "Chrome MV3"],
    status: { ko: "v1.2.0", en: "v1.2.0" },
    repo: null,
  },
  {
    id: "shortform",
    group: "auto",
    name: "ShortForm Manager",
    tagline: { ko: "숏폼 영상 일괄 업로드 데스크톱 앱", en: "Desktop app for batch short-form uploads" },
    desc: {
      ko: "로컬 영상을 YouTube, Instagram Reels, TikTok, Facebook에 한 번에 올리는 Electron 앱입니다. 각 플랫폼의 공식 API와 OAuth를 씁니다.",
      en: "An Electron app that uploads local videos to YouTube, Instagram Reels, TikTok and Facebook at once, using each platform's official API and OAuth.",
    },
    highlights: {
      ko: ["OAuth 토큰은 OS 암호화로 저장합니다", "설치형과 포터블 .exe를 모두 빌드합니다"],
      en: ["OAuth tokens are stored with OS-level encryption", "Both installer and portable .exe builds"],
    },
    stack: ["Electron", "Node.js", "OAuth"],
    repo: null,
  },
  {
    id: "apophenia",
    group: "auto",
    name: "Apophenia",
    tagline: { ko: "쿠팡 × 숏폼 워크플로우 매니저 봇", en: "Coupang × short-form workflow manager bot" },
    desc: {
      ko: "영상 제작과 쿠팡 아이템 워크플로우를 돕는 Discord 매니저 봇입니다. 서버 구조는 봇이 만들고, 기능 모듈은 파일만 추가하면 로드됩니다.",
      en: "A Discord manager bot for a video-production and Coupang-item workflow. It builds the server layout itself, and feature modules load just by adding a file.",
    },
    stack: ["Python", "discord.py", "Slash commands"],
    repo: null,
  },
  {
    id: "hypercalculia",
    group: "re",
    shot: {
      src: "assets/projects/hypercalculia.webp",
      alt: { ko: "Hypercalculia 명령 로직을 터미널에서 실행한 화면", en: "Hypercalculia command logic running in a terminal" },
      caption: {
        ko: "봇의 명령 코드를 Discord 없이 터미널에서 실행한 화면입니다.",
        en: "The bot's command code running in a terminal, without Discord.",
      },
    },
    name: "Hypercalculia",
    tagline: { ko: "저수준·리버싱 도구 Discord 봇", en: "Low-level and reverse-engineering Discord bot" },
    desc: {
      ko: "기계어↔어셈블리 변환, 진법·IEEE754 변환, 해시, JWT 디코드 같은 도구를 슬래시 명령과 접두사 명령으로 제공합니다.",
      en: "Machine code ↔ assembly, base and IEEE754 conversion, hashing and JWT decoding, available as slash and prefix commands.",
    },
    stack: ["Node.js", "discord.js", "Docker"],
    repo: null,
  },
  {
    id: "lobby-logger",
    group: "auto",
    name: "HFF Lobby Logger",
    tagline: { ko: "멀티플레이 방 열림·닫힘 기록기", en: "Multiplayer lobby open/close logger" },
    desc: {
      ko: "Steamworks API로 공개 로비 목록을 조회해, 새로 생긴 방은 열림, 사라진 방은 닫힘으로 Discord 채널에 기록합니다.",
      en: "Polls the public lobby list through the Steamworks API and logs new lobbies as opened and vanished ones as closed to a Discord channel.",
    },
    stack: ["Node.js", "Steamworks", "Discord webhook"],
    repo: null,
  },
  {
    id: "allbirds",
    group: "school",
    image: "assets/projects/allbirds.webp",
    name: "Allbirds Clone Coding",
    tagline: { ko: "MERN 스택 쇼핑몰 클론 코딩", en: "MERN-stack e-commerce clone" },
    meta: [
      ["label.course", { ko: "텀 프로젝트", en: "Term project" }],
      ["label.period", { ko: "2025.11 – 2025.12", en: "Nov – Dec 2025" }],
      ["label.team", { ko: "3인 (백엔드 1, 프론트엔드 2)", en: "3 people (1 backend, 2 frontend)" }],
      ["label.role", { ko: "프론트엔드 (핵심 로직, UI/UX)", en: "Frontend (core logic, UI/UX)" }],
    ],
    desc: {
      ko: "Allbirds 웹사이트를 공부하려고 클론 코딩한 반응형 쇼핑몰입니다. React, Express, MongoDB로 상품 조회부터 주문, 관리자 기능까지 만들었습니다.",
      en: "A responsive shop cloned from the Allbirds website for learning. React, Express and MongoDB cover everything from browsing to ordering and admin tools.",
    },
    highlights: {
      ko: ["카테고리, 사이즈, 가격 필터와 정렬, 장바구니, 주문, 리뷰", "관리자 페이지에서 상품 등록, 할인 정책 변경, 판매 현황 조회"],
      en: ["Filters and sorting, cart, orders and reviews", "Admin page for product registration, discount policy and sales overview"],
    },
    stack: ["React", "Vite", "Express", "MongoDB", "Context API"],
    note: {
      ko: "브랜드 자산은 Allbirds, Inc.의 소유이며 교육 목적으로만 만들었습니다.",
      en: "Brand assets belong to Allbirds, Inc. Built for educational purposes only.",
    },
    repo: "https://github.com/DoheumKim/Allbirds-CloneCoding",
    repoNote: { ko: "팀원 계정의 공개 저장소", en: "Public repository under a teammate's account" },
  },
  {
    id: "globalgo",
    group: "school",
    gallery: [
      { src: "assets/projects/globalgo-home.webp", label: { ko: "메인", en: "Home" } },
      { src: "assets/projects/globalgo-stats.webp", label: { ko: "통계", en: "Statistics" } },
      { src: "assets/projects/globalgo-qna.webp", label: { ko: "AI 질의응답", en: "AI Q&A" } },
    ],
    name: "GlobalGo",
    tagline: { ko: "AI 해외취업 가이드 시스템", en: "AI-powered overseas job guide" },
    meta: [
      ["label.course", { ko: "창의 프로젝트", en: "Creative project" }],
      ["label.period", { ko: "2026.04 – 2026.06", en: "Apr – Jun 2026" }],
      ["label.team", { ko: "5인", en: "5 people" }],
      ["label.role", { ko: "Streamlit UI, 데이터 로딩, RAG 챗 연동, 채용공고 원문 보기", en: "Streamlit UI, data loading, RAG chat integration, original job-posting view" }],
    ],
    desc: {
      ko: "국가별 통계, 채용공고, AI 질의응답을 하나의 흐름으로 잇는 해외취업 가이드 웹 애플리케이션입니다.",
      en: "A web app that connects country statistics, job postings and AI Q&A in one flow for people preparing to work abroad.",
    },
    highlights: {
      ko: ["국가별 경제 지표를 MySQL에 정리하고 Plotly로 시각화했습니다", "LangChain, GPT-4o, ChromaDB로 Adaptive RAG 파이프라인을 만들었습니다"],
      en: ["Country economic indicators kept in MySQL and visualized with Plotly", "An Adaptive RAG pipeline on LangChain, GPT-4o and ChromaDB"],
    },
    stack: ["Python", "Streamlit", "FastAPI", "MySQL", "ChromaDB", "LangChain", "GPT-4o"],
    note: {
      ko: "DB와 API 키 없이 저장소의 CSV 데이터로 실행한 화면입니다. 채용공고 검색과 AI 답변은 키가 필요해서 나오지 않습니다.",
      en: "Captured on the repository's CSV data, without the database or API keys. Job search and AI answers need keys, so they don't appear.",
    },
    repo: null,
  },
  {
    id: "techmoup",
    group: "school",
    gallery: [
      { src: "assets/projects/techmoup-menu.webp", label: { ko: "메뉴", en: "Menu" } },
      { src: "assets/projects/techmoup-stage.webp", label: { ko: "플레이", en: "Gameplay" } },
    ],
    name: "TechmoUP",
    play: { href: "play/techmoup/index.html" },
    tagline: { ko: "Unity 2D 클라이밍 게임 (컴퓨터 그래픽스)", en: "Unity 2D climbing game (Computer Graphics)" },
    meta: [
      ["label.course", { ko: "컴퓨터 그래픽스", en: "Computer Graphics" }],
      ["label.period", { ko: "2026.05", en: "May 2026" }],
    ],
    desc: {
      ko: "컴퓨터 그래픽스 수업에서 Unity 6(URP)로 만든 2D 클라이밍 게임입니다. 셰이더와 시각 효과로 캠퍼스의 분위기를 표현했습니다.",
      en: "A 2D climbing game made in Unity 6 (URP) for a computer graphics class, using shaders and visual effects to set the campus mood.",
    },
    highlights: {
      ko: ["스프라이트 아웃라인 셰이더와 버퍼 기반 아웃라인 셰이더(HLSL)를 썼습니다", "드래그 조준과 부스트 게이지, 태양광·광선·깃발 이펙트를 넣었습니다"],
      en: ["Sprite outline and buffer-based outline shaders (HLSL)", "Drag aiming with a boost gauge, plus sunlight, light rays and flag effects"],
    },
    stack: ["Unity 6", "C#", "URP", "HLSL"],
    note: {
      ko: "게임 속 이미지와 음악은 AI로 제작했고, 글꼴은 메이플스토리 서체(NEXON)입니다. 화면은 Unity 에디터에서 각 씬을 플레이하며 캡처했습니다.",
      en: "The images and music in the game are AI-generated, and the font is the MapleStory typeface (NEXON). Screens were captured by playing each scene in the Unity editor.",
    },
    repo: null,
  },
];

/* Work screenshots (assets/skins/krita-full.webp, assets/poses/blender-full.webp). */
const WORK = {
  krita: [{ slug: "krita-full", src: "assets/skins/krita-full.webp", name: "Krita" }],
  poses: [{ slug: "blender-full", src: "assets/poses/blender-full.webp", name: "Blender" }],
};
