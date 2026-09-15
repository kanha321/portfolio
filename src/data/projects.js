export const projectsList = [
  {
    name: 'ProxyMan',
    slug: 'proxyman',
    date: '2025',
    type: 'Systems & Networking',
    tagline: 'Zero-configuration, kernel-level transparent proxy engine for Windows & campus networks',
    description: 'A low-level C++ network engine built to solve proxy authentication hurdles in university campus networks (MNNIT EDC gateways). Operates transparently at the Windows kernel level to route, authenticate, and benchmark traffic without disrupting developer tooling.',
    problem: 'Campus networks enforce authenticated HTTP proxy gateways with high latency variance and strict firewalls. Developer workflows (VS Code, Antigravity, Git, raw Python scripts, gRPC) frequently drop connections, fail during network transitions (hostel Wi-Fi to campus LAN to hotspot), or lack proxy configuration altogether.',
    solution: 'Engineered a transparent network driver utilizing WinDivert to intercept outbound TCP packets at Layers 3/4. Implemented dynamic reachability probing to seamlessly switch between gateway proxy mode and direct passthrough mode while keeping a persistent local listener on 127.0.0.1:55555 active.',
    highlights: [
      'Kernel-Level Interception: Uses WinDivert driver to transparently tunnel applications lacking native proxy support (CLI tools, Python scripts, gRPC binaries).',
      'Dual-Mode Reachability Auto-Switching: Seamlessly toggles between MNNIT proxy mode and personal Wi-Fi direct mode with anti-flap debouncing (45s heartbeat, requires 2 consecutive failures before fallback).',
      'Functional Probing & Parallel Pool Racing: Issues real HTTP CONNECT handshakes with multi-threaded parallel pool racing across candidate gateway IPs on cache miss.',
      'AI Streaming Optimization: Sets socket receive timeouts (SO_RCVTIMEO) to infinite keep-alive after HTTP CONNECT handshakes to prevent dropped connections on Server-Sent Events (SSE) and gRPC AI streams (Antigravity, Gemini, ChatGPT).',
      'Kernel QUIC / UDP:443 Blocker: Drops UDP port 443 packets at the kernel driver layer, forcing browsers and Google services to instantly fall back to reliable TCP HTTP/1.1 or HTTP/2 tunnels.',
      'Headless Background Execution: Compiled as native WIN32_EXECUTABLE with zero console popups and automated elevated Task Scheduler autostart without UAC prompts.'
    ],
    tech: ['C++', 'WinDivert', 'Winsock', 'Windows API', 'TCP/IP', 'SSE/gRPC', 'Task Scheduler'],
    highlight: true,
    github: 'https://github.com/kanha321/ProxyMan'
  },
  {
    name: 'egui-widgetkit',
    slug: 'egui-toolkit',
    date: '2025',
    type: 'Rust UI Engine',
    tagline: 'Tactile UI engine with analytical ODE spring physics and Vim modal navigation for egui',
    description: 'A modular, high-contrast, tactile UI engine and component suite for Rust immediate-mode GUI (egui). Bridges the gap between raw immediate-mode graphics and polished, organic desktop user interfaces like Linear, Raycast, and Blender.',
    problem: 'Traditional immediate-mode UIs feel rigid, linear, and disconnected: animations rely on basic linear lerp timers, mouse hover and keyboard focus are split into isolated silos, and menus spawn as jarring detached OS overlays.',
    solution: 'Designed an architecture combining closed-form mass-spring-damper ODE physics, Vim-style modal keyboard navigation, directional spatial focus graphs, in-place morphing geometry, and a token-driven semantic design system.',
    highlights: [
      'Analytical Closed-Form Spring ODE Solver: Computes instantaneous position x(t) and velocity v(t) using exact algebraic ODE solutions for underdamped, critically damped, and overdamped regimes, settling to 0.00% CPU utilization at rest.',
      'Vim Modal Navigation & Buffer Engine: Full spatial layout navigation using H/J/K/L home row keys; integrated modal text editing engine with Normal, Insert, Visual, and Operator-Pending modes, text objects (iw, i"), operators (d, c, y, u), and register memory.',
      'Unified Highlight-Focus Paradigm: Keyboard focus and mouse hover feed into the same spatial navigator, rendering a continuous elastic bounding box (SpringRect) that squashes, stretches, and glides between elements.',
      'In-Place Morphing Geometry: Menus, dropdowns, and sliders smoothly expand and morph directly within the layout flow rather than spawning disconnected OS windows.',
      'Token-Based Semantic Theme System: 12 curated color palettes (Catppuccin Mocha/Macchiato/Frappé/Latte, Dracula, Tokyo Night, Nord, Gruvbox) with zero hardcoded hex colors.'
    ],
    tech: ['Rust', 'egui', 'Analytical ODEs', 'Vim Engine', 'Systems GUI', 'Spatial Graph'],
    highlight: true,
    github: 'https://github.com/kanha321/egui-toolkit'
  },
  {
    name: 'Iris — Semantic Media Indexing',
    slug: 'iris',
    date: '2026',
    type: 'Personal Project',
    tagline: 'Semantic image and video search powered by CLIP embeddings & pgvector',
    description: 'A full-stack semantic multimedia search and visual indexing platform. Enables natural language conceptual queries across visual media (e.g., "red sports car at night", "receipt from coffee shop") without manual tagging.',
    problem: 'Standard photo galleries and media drives rely exclusively on rigid file metadata and exact filenames, rendering semantic discovery and conceptual searches across unorganized personal media impossible.',
    solution: 'Engineered an end-to-end pipeline: a native Kotlin/Jetpack Compose Android app, an asynchronous FastAPI backend with Celery & Redis, a vector database powered by PostgreSQL with pgvector, and multi-modal neural models (CLIP, YOLOv8, EasyOCR).',
    highlights: [
      'Multi-Modal Vector Embeddings: Generates 512-dimensional vector embeddings via OpenAI CLIP, indexing image and video keyframes for sub-50ms cosine similarity searches via pgvector (HNSW index).',
      'Asynchronous Processing Pipeline: FastAPI backend dispatches media ingestion jobs to distributed Celery workers backed by Redis, preventing API thread blocking during heavy neural inference.',
      'Object Detection & Optical OCR: Integrates YOLOv8 for precise multi-object bounding-box localization and EasyOCR to parse readable text inside scanned receipts, signs, and screenshots.',
      'Cloud Media Persistence: Securely stores full-resolution assets and transcoded video streams on Backblaze B2 object storage with time-limited signed download URLs.',
      'Modern Android Frontend: Built with 100% declarative Jetpack Compose, featuring smooth zoomable media grids, reactive search results, and local thumbnail caching.'
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'pgvector', 'YOLOv8', 'CLIP', 'EasyOCR', 'Backblaze B2'],
    highlight: true,
    github: 'https://github.com/kanha321/iris'
  },
  {
    name: 'EchoStrike',
    slug: 'echostrike',
    date: '2025',
    type: 'Hack36 National Hackathon',
    tagline: 'Real-time 2-player LAN audio tennis game for visually impaired players',
    description: 'An accessible, competitive sports game built during a 36-hour sprint at Hack36 (National Hackathon) that secured 4th place out of competing teams from across India.',
    problem: 'Competitive digital sports games are almost exclusively visual, effectively excluding visually impaired individuals from fast-paced multiplayer gaming experiences.',
    solution: 'Engineered an audio-spatial game engine using real-time stereo audio cues (dynamic volume panning, pitch shifts, and frequency modulation) paired with on-device motion classification running lightweight TensorFlow Lite models on device accelerometer/gyroscope streams.',
    highlights: [
      '3D Binaural Sound Spatialization: Real-time stereo audio panning and acoustic cues communicate ball trajectory, distance, spin, and velocity directly to the player through headphones.',
      'On-Device IMU Motion Classification: Collected and labeled 250 motion swings per direction (forehand, backhand, slice, smash); trained a quantized TensorFlow Lite neural network running in under 12ms on-device.',
      'Low-Latency LAN Multiplayer: Custom lightweight socket protocol over local Wi-Fi enabling synchronous real-time 2-player matches with zero cloud server latency.',
      '4th Prize Nationally: Recognized among the top innovations at Hack36 2025 for social impact and real-time edge computing.'
    ],
    tech: ['Kotlin', 'MVVM', 'Python', 'TensorFlow Lite', 'Sensors (IMU)', 'LAN Sockets', 'Audio DSP'],
    highlight: true,
    award: 'Hack36 4th Prize Winner',
    awardUrl: 'https://drive.google.com/file/d/1Oi2mqSuAnoIV7N21pg9ydy4Fa9iH0d14/view?usp=drive_link',
    github: 'https://github.com/4SumHack36/EchoStrike'
  },
  {
    name: 'MWI — Media Without Internet',
    slug: 'mwi',
    date: '2025',
    type: 'Personal Project',
    tagline: 'Campus-wide local 4K video streaming platform with zero internet dependency',
    description: 'A full-stack, decentralized campus LAN media streaming system engineered to deliver high-bitrate video (up to 4K 60FPS) across university hostels without consuming external internet bandwidth.',
    problem: 'University campus hostels experience congested, throttled, or metered internet bandwidth, causing constant buffering and quality drops when students stream lectures and educational media from external services.',
    solution: 'Architected a Spring Boot local media server utilizing adaptive bitrate streaming (DASH and HLS), chunked resumable 10GB file uploads, and zero-copy socket transfers over local subnet switches.',
    highlights: [
      'Zero Internet Dependency: Operates entirely within the campus intranet subnet, serving video streams directly between LAN peers at maximum switch line speeds.',
      'Adaptive Bitrate Streaming (DASH & HLS): Encodes and serves media segments dynamically, enabling client media players (ExoPlayer) to seamlessly adapt resolution to instantaneous local network conditions.',
      '10GB Resumable Chunked Uploads: Fault-tolerant multipart upload pipeline that gracefully recovers from transient client disconnects without re-uploading completed chunks.',
      'High-Throughput Concurrency: Leverages non-blocking disk I/O and SQLite metadata caching to support simultaneous 4K streams with minimal CPU and memory overhead.'
    ],
    tech: ['Kotlin', 'Spring Boot', 'DASH', 'HLS', 'SQLite', 'ExoPlayer', 'FFmpeg'],
    highlight: true,
    github: 'https://github.com/kanha321/mwi'
  },
  {
    name: 'Sign it or Miss it (SIMI)',
    slug: 'simi',
    date: '2025',
    type: 'DevJam 2025 Winner',
    tagline: 'Real-time 3D hand-tracking interactive gesture game (1st Place / 78 Teams)',
    description: 'An interactive, computer-vision powered 3D sign-matching game that secured 1st place out of 78 competing engineering teams at DevJam 2025, directly qualifying our team for entry into the Hack36 national hackathon.',
    problem: 'Conventional sign language tools are often passive or require expensive specialized hardware (e.g. data gloves, depth sensors), limiting accessible interactive gamification.',
    solution: 'Built a 3D Unity game that analyzes raw webcam video streams to track 21 hand joints in three-dimensional space, challenging players to accurately mimic gestures against strict time constraints.',
    highlights: [
      'Monocular 3D Hand Tracking: Tracks 21 skeletal landmark points in real time using standard webcam hardware without requiring depth cameras or sensor wearables.',
      'Spatial Gesture Matching Engine: Computes angular joint deviations and hand orientation metrics to validate sign accuracy within milliseconds.',
      'Interactive Game Loop: Features dynamic difficulty scaling, score multipliers, combo streak mechanics, and real-time audio-visual feedback.',
      '1st Place Champion: Awarded top honours out of 78 engineering teams at DevJam 2025.',
      'Direct Hack36 Qualification: Winning 1st place at DevJam was the direct prerequisite that qualified our team to compete in Hack36 (National Hackathon), where we subsequently achieved 4th place with EchoStrike.'
    ],
    tech: ['Unity', 'C#', 'Computer Vision', 'Hand Tracking', 'Spatial Math'],
    highlight: true,
    award: 'DevJam 2025 1st Place Winner',
    awardUrl: 'https://drive.google.com/file/d/10mSMSTBeBFSO3UYW3oW0nXeumn06niDZ/view',
    github: 'https://github.com/4SumMNNIT/SIMI'
  }
]
