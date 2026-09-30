import { Project } from './types'

export const projects = [
 {
  "id": "handwrytten-fleet",
  "name": "200+ robot fleet at Handwrytten",
  "track": "robotics",
  "status": "complete",
  "year": "2023-2026",
  "summary": "Helped scale Handwrytten's proprietary fleet of robotic handwriting machines from 0 to 200+ units producing 30,000 letters/day. 3× output growth. Promoted from Robotics Engineer Intern to Robotics Engineer II in 10 months while leading the fleet ramp team.",
  "body": [
   "Handwrytten (granted patents US 11,052,693 & US 11,260,686) runs a fleet of 200+ proprietary robotic handwriting machines, tripling output from 10,000 to 30,000 letters per day. Every machine runs a multi-threaded Python control application and operates autonomously from a single barcode scan, dynamically pulling jobs from the cloud over WiFi.",
   "Each machine posts live status to AWS, processed through an SQL pipeline into OEE metrics (availability = machines available ÷ total machines). the fleet holds 96% uptime. Prometheus/Grafana telemetry and fault detection cut mean time to repair from 10 hours to 3.5 hours (a 65% reduction). I led the ramp team of 6 (2 engineers, 4 technicians) deploying ~6 machines/week; steady-state support is now a 3-person team."
  ],
  "tech": [
   "Python",
   "YOLO / PyTorch",
   "PLC / Ladder Logic",
   "EasyEDA",
   "AWS",
   "SQL",
   "Prometheus",
   "Grafana"
  ],
  "outcomes": [
   "0 to 200+ machines deployed",
   "30,000 letters/day (3× growth)",
   "96% fleet uptime via OEE",
   "MTTR 10h to 3.5h (65% reduction)",
   "$100K+/year labor saved",
   "4 custom PCBs shipped to fleet"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Python",
   "YOLO",
   "PyTorch",
   "Prometheus",
   "Grafana"
  ],
  "caseStudy": "handwrytten-fleet"
 },
 {
  "id": "pi-fleet",
  "name": "12-Node Pi Homelab",
  "track": "robotics",
  "status": "in-progress",
  "year": "2026",
  "summary": "Infrastructure-as-code for a 12-node Raspberry Pi cluster managed entirely through Ansible playbooks and Docker Compose. Services include k3s Kubernetes, Grafana dashboards, Prometheus metrics, and Pi-hole DNS filtering. all declaratively versioned in git. Housed in a 3D-printed rack I designed in SolidWorks.",
  "body": [
   "Every node is provisioned from a clean Raspberry Pi OS image using idempotent Ansible roles covering SSH hardening, package installation, static IP assignment, and service deployment. k3s provides lightweight Kubernetes orchestration for containerized workloads, with Helm charts tracked in the repository.",
   "Prometheus scrapes metrics from all nodes and feeds Grafana dashboards for CPU, memory, disk, and network visibility. Pi-hole runs as a cluster-wide DNS resolver.",
   "The enclosure is a server-rack-compatible cabinet designed to house all 12 Raspberry Pi 4 and Pi 5 units in a vertical stack. The pi4_rack part provides mounting slots for each compute node with airflow channels for passive cooling between each tier.",
   "Side-wall bases add structural support and cable management channels for Ethernet and power distribution. The full assembly includes aluminum mounting rails, power-distribution busbar clips, and preparation for future network switch and storage integration at the enclosure base."
  ],
  "tech": [
   "Ansible",
   "Docker",
   "k3s",
   "Grafana",
   "Prometheus",
   "Linux",
   "Raspberry Pi 4/5",
   "SolidWorks",
   "Mechanical Design",
   "3D Printing"
  ],
  "next": [
   "Commit baseline Ansible playbook covering all 12 nodes",
   "Wire Loki log shipping to pi-monitor",
   "Per-node hardening checklist (SSH, ufw, fail2ban)"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Ansible",
   "Docker",
   "Linux",
   "Raspberry Pi 4/5",
   "Prometheus",
   "Grafana"
  ],
  "caseStudy": "pi-fleet-edge-ml",
  "outcomes": [
   "12 nodes in a custom SolidWorks rack"
  ]
 },
 {
  "id": "robot-arm-v2",
  "name": "6-DOF robot arm: CAD, electronics and firmware",
  "track": "robotics",
  "status": "in-progress",
  "year": "2026",
  "summary": "Second-revision 6-DOF robot arm built around a Raspberry Pi CM5 carrier, TMC2209 stepper drivers, and ROS2 Jazzy. Forward/inverse kinematics solver, vision-guided pick-and-place, and a Flask REST API for external control. Full SolidWorks/Fusion 360 CAD for 3D printing, plus ESP32-S3 firmware (motion, safety, protocol modules) and a ROS2 Jazzy driver stack with teleop.",
  "body": [
   "The V2 platform replaces the V1 servo stack with closed-loop steppers driven by TMC2209 silent drivers, giving repeatability and torque margin for sub-mm positioning. The kinematics engine computes joint angles for arbitrary end-effector poses using SciPy numerical optimization with configurable DH parameters.",
   "ROS2 Jazzy nodes handle real-time joint state publishing and trajectory interpolation; a Flask REST API exposes pose commands, joint-space moves, and gripper control for external schedulers. The vision pipeline detects object centroids in the camera frame, transforms them to robot-frame coordinates via a calibrated homography, and passes pick targets into the IK solver.",
   "The arm is designed around closed-loop NEMA-17 steppers with TMC2209 drivers, with each link shaped to minimize print-in-place supports while maintaining torsional stiffness under load. SolidWorks handles primary structural design and FEA stress analysis on high-load joints; Fusion 360 covers organic fillets and export workflows.",
   "All joints use captured M3 heat-set inserts for repeatable disassembly. The full assembly is parameterized so link lengths and motor mount offsets can be adjusted without redrawing from scratch. OpenSCAD scripts generate horn adapters and tool-changer mounts, version-controlled alongside the main assembly. PrusaSlicer profiles for PETG and PLA are included for each component with recommended print orientations.",
   "The firmware is organized into four modules: motion.cpp handles joint trajectory interpolation and velocity control; safety.cpp enforces joint limits and fault detection; protocol.cpp manages the serial command framing; and PROTOCOL.md documents the serial and CAN interfaces. All modules build under PlatformIO targeting the ESP32-S3, producing a unified binary.",
   "The ROS2 Jazzy driver stack includes arm_bringup and arm_description packages with launch files and joint_limits.yaml for hardware constraints. Xbox controller and keyboard teleop nodes provide real-time joystick and keystroke input for manual control during commissioning and debugging."
  ],
  "tech": [
   "Python",
   "ROS2",
   "TMC2209",
   "OpenCV",
   "Flask",
   "SciPy",
   "Raspberry Pi 4/5",
   "SolidWorks",
   "Fusion 360",
   "3D Printing",
   "OpenSCAD",
   "C++",
   "PlatformIO",
   "ESP32-S3",
   "Motion Control"
  ],
  "next": [
   "Bench-test IK solver against URDF in Gazebo Harmonic",
   "Decide drivers-in-console vs drivers-in-arm-base (Open Q #1)",
   "Order CM5-16GB + LRS-350-24 + Adafruit 736 slip-ring + 6× AS5048A",
   "ARMPray CAD revisions: encoder pockets, ISO 9409 flange, hollow cable channels",
   "Finish base + shoulder STL pack",
   "FEA pass on J2/J3 high-load joints",
   "Print first PETG test piece + dimensional check"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Python",
   "ROS2",
   "TMC2209",
   "OpenCV",
   "Raspberry Pi 4/5",
   "SolidWorks",
   "Fusion 360",
   "3D Printing",
   "OpenSCAD"
  ],
  "caseStudy": "robot-arm",
  "outcomes": [
   "Parametric, print-ready CAD for all 6 axes",
   "ESP32-S3 firmware: motion, safety and protocol modules",
   "ROS2 Jazzy driver stack with joint limits and teleop"
  ]
 },
 {
  "id": "linda-agent",
  "name": "Linda, financial research agent",
  "track": "software",
  "status": "complete",
  "year": "2026",
  "summary": "Autonomous financial research agent that combines the Claude API, live market data feeds, and Exa web search to answer complex investment questions in a conversational CLI. 15 tools spanning equity data, news search, DCF, and portfolio analysis.",
  "body": [
   "Linda is a TypeScript agent on Node.js that treats financial research as a tool-use problem. Given a natural-language question, it dynamically selects from 15 tools spanning equity data fetching, news search, DCF calculation, and portfolio analysis. The Claude API powers all reasoning and tool-selection decisions, while Exa Search and Polygon ground responses in current web sources.",
   "Results stream to a rich terminal UI with inline citations. Ollama integration provides a local fallback model for offline runs. The architecture is modular. new data sources and calculation tools can be added without touching the core agent loop. Built as a clean demonstration of agentic tool-use architecture. reasoning, dynamic tool selection, and grounded retrieval. in production TypeScript."
  ],
  "tech": [
   "TypeScript",
   "Node.js",
   "Claude API",
   "Exa Search",
   "Ollama",
   "Polygon"
  ],
  "next": [
   "Polygon options-chain tool (Greeks + IV surface)",
   "Local Ollama fallback for offline DCF reasoning",
   "Persistent eval harness for tool-selection accuracy regression"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "TypeScript",
   "Claude API",
   "Ollama"
  ]
 },
 {
  "id": "yolov8-hailo",
  "name": "YOLOv8 edge inference on Hailo-8",
  "track": "cv-ml",
  "status": "in-progress",
  "year": "2026",
  "summary": "YOLOv8n object detection and ByteTrack tracking compiled to the Hailo-8 NPU on a Raspberry Pi 5. Profiling showed the network group being re-activated on every frame; opening it once at startup took throughput from 81 to 145 FPS (640x640, 6.8 ms p50).",
  "body": [
   "Starting from an Ultralytics YOLOv8n checkpoint, the model is exported to ONNX and then compiled to a Hailo Executable Format using the Hailo Model Zoo compiler with quantization-aware calibration on a representative COCO subset. The compiled HEF runs entirely on the Hailo-8 AI HAT+ (26 TOPS) over PCIe with NMS on the chip, leaving the CPU free for capture, tracking and drawing.",
   "The first working pipeline entered the network group activation and opened the inference streams on every frame, to dodge a HAILO_STREAM_NOT_ACTIVATED race. Opening both once at startup, in the right order, took a reproducible 500-frame benchmark from 80.99 to 144.74 FPS (p50 12.06 to 6.84 ms, p95 13.10 to 7.31 ms). A second bug drew every box with x and y swapped; the decoder returns x0,y0,x1,y1 and the drawing code read y0,x0,y1,x1.",
   "The live pipeline runs capture, inference and tracking on separate threads, infers only frames it has not seen, and updates ByteTrack once per inferred frame so the logged FPS is real throughput. On a USB webcam it ran 60 s at 15.0 FPS with every frame inferred: camera-bound, not NPU-bound."
  ],
  "tech": [
   "YOLOv8",
   "Python",
   "Hailo-8 NPU",
   "HailoRT",
   "ByteTrack",
   "Raspberry Pi 5",
   "OpenCV",
   "ONNX"
  ],
  "outcomes": [
   "144.74 FPS on the Hailo-8, up from 80.99 (yolov8n, 640x640)",
   "6.84 ms p50, 7.31 ms p95 inference latency",
   "Box-order bug found and fixed (x/y swapped on every detection)",
   "USB webcam live pipeline: 60 s at 15.0 FPS, camera-bound"
  ],
  "next": [
   "Measure the Pi CSI camera path and tracking on a busy scene",
   "Record a hero clip of live tracking",
   "Compile yolov8s.hef and benchmark against yolov8n on the Hailo-8"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/yolov8-hailo.svg",
   "alt": "Pipeline from threaded capture through Hailo-8 inference, NMS decode and ByteTrack, with throughput measured at 80.99 FPS before and 144.74 FPS after activating the network group once",
   "width": 800,
   "height": 500
  },
  "skills": [
   "YOLOv8",
   "Python",
   "Hailo-8 NPU",
   "OpenCV",
   "ONNX",
   "Raspberry Pi 4/5"
  ],
  "caseStudy": "pi-fleet-edge-ml"
 },
 {
  "id": "edge-defect-detection",
  "name": "AI HAT + VLM Defect Demo",
  "track": "cv-ml",
  "status": "in-progress",
  "year": "2026",
  "summary": "Open-vocabulary defect inspection on a Pi 5 + Hailo-8 AI HAT. Florence-2 vision-language model replaces a traditional YOLO fine-tune. prompt it with \"scratch, crack, missing pin\" and it grounds the defect on the part. No labeled dataset required to ship the first demo.",
  "body": [
   "The pipeline pivots away from a classic YOLO fine-tune toward open-vocabulary defect grounding with Microsoft Florence-2 base. The DaViT vision tower exports to ONNX and compiles to a Hailo-8 HEF (26 TOPS, AI HAT) so the encoder runs on the NPU while the language head and decoder run on the Pi 5 CPU at roughly 2 to 4 seconds per frame. Well-matched to a defect inspection station rather than a real-time line.",
   "Prompts use the `<CAPTION_TO_PHRASE_GROUNDING>` task with defect classes (\"scratch, crack, chip, missing pin, dent\") and return bounding boxes plus natural-language explanations. A systemd service runs Flask dashboard for interactive image upload, with Docker Compose staging the full inference pipeline. A CPU-only fallback path runs Florence-2 entirely on the Pi 5 CPU if HEF compilation of the vision tower stalls."
  ],
  "tech": [
   "Florence-2 VLM",
   "Python",
   "Hailo-8 NPU",
   "PyTorch",
   "Flask",
   "Docker"
  ],
  "next": [
   "Compile Florence-2 DaViT vision tower to Hailo-8 HEF",
   "Capture a 50-frame MVTec hazelnut subset on the Pi 5 camera rig",
   "Build a prompt-engineering harness for defect-class wording variants",
   "Confusion matrix + per-class recall report vs hand-labeled ground truth",
   "CPU-only Moondream2 fallback path if the Hailo compile stalls"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Python",
   "Hailo-8 NPU",
   "PyTorch",
   "Docker"
  ],
  "caseStudy": "pi-fleet-edge-ml"
 },
 {
  "id": "fpv-robot-cv",
  "name": "RobotCar, autonomous FPV rover",
  "track": "robotics",
  "status": "in-progress",
  "year": "2026",
  "summary": "A working Raspberry Pi-4 autonomous rover: an OpenCV lane-detection pipeline computes steering error, publishes it over MQTT at 30 Hz, and a motor-controller node closes the loop with PID over an H-bridge. Seven modules span vision, control, obstacle avoidance, video streaming, and a live web UI. The chassis (motor base, Pi mount, camera mount) is my own SolidWorks design.",
  "body": [
   "RobotCar is a from-scratch autonomous ground vehicle on a Raspberry Pi 4 (SunFounder HAT). The vision module applies adaptive thresholding and a bird's-eye perspective warp to isolate lane markings, then computes the lane-center offset as a PID error signal.",
   "Steering and throttle commands publish to a local MQTT broker at 30 Hz; a motor-controller node converts them to differential PWM through an H-bridge. Additional modules add ultrasonic obstacle avoidance, an MJPEG video stream, and a Flask web UI with live PID-tuning sliders. The codebase is organized into seven production modules. vision, controller, obstacle, streaming, web, car, and config .",
   "The chassis is a two-wheel differential-drive design built around TT gearmotors. The motor base holds both motors in aligned sockets; a ballcaster rear wheel provides the third contact point for stability.",
   "The Raspberry Pi 4 carrier mounts centrally above the motor base; a modular camera mount points forward for lane-detection computer vision in the fpv-robot-cv pipeline. The assembly uses print-in-place snap joints for rapid prototyping iteration."
  ],
  "tech": [
   "Python",
   "OpenCV",
   "MQTT",
   "Raspberry Pi 4/5",
   "PID",
   "SolidWorks",
   "Mechanical Design",
   "3D Printing"
  ],
  "outcomes": [
   "7-module autonomous rover",
   "OpenCV lane detection to MQTT to PID",
   "30 Hz steering loop",
   "Live web UI + PID tuner",
   "Own SolidWorks chassis: motor base, Pi and camera mounts"
  ],
  "next": [
   "Record a full autonomous lap on the marked track",
   "Fuse ultrasonic + vision for intersection handling",
   "Log lane-offset error traces for PID tuning"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Python",
   "OpenCV",
   "Raspberry Pi 4/5"
  ]
 },
 {
  "id": "homelab-monitoring",
  "name": "Homelab Monitoring Stack",
  "track": "controls",
  "status": "in-progress",
  "year": "2026",
  "summary": "Full observability stack for the 12-node Pi cluster on k3s: Prometheus scrapes node metrics, Loki aggregates logs, Grafana renders dashboards, and Alertmanager routes threshold alerts to a Discord webhook.",
  "body": [
   "The stack deploys via Helm charts managed in the pi-fleet repository, keeping monitoring infrastructure in sync with the application layer through a single Ansible playbook. Prometheus is configured with per-node scrape jobs for the Node Exporter, cAdvisor container metrics, and custom application metrics exposed by robot-control services.",
   "Loki aggregates systemd journal logs from all 12 nodes via Promtail agents, enabling cross-node log correlation. Grafana dashboards cover cluster-wide resource utilization, per-pod CPU/memory, and robot service error rates. Alertmanager rules fire on node memory pressure above 80%, disk fill rate projections exceeding 7 days, and any robot service crash loop. Alert payloads include direct deep-links to the relevant Grafana panel."
  ],
  "tech": [
   "Prometheus",
   "Grafana",
   "k3s",
   "Docker",
   "Linux"
  ],
  "next": [
   "Helm chart commit for the full stack",
   "Discord webhook on Alertmanager for node-down + memory-pressure",
   "SLO burn-rate dashboard for robot-control services"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/homelab-monitoring.svg",
   "alt": "Diagram of the monitoring stack: 12 Pis scraped by Prometheus, feeding Grafana dashboards and Alertmanager alerts to Telegram",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Prometheus",
   "Grafana",
   "Docker",
   "Linux"
  ],
  "caseStudy": "pi-fleet-edge-ml"
 },
 {
  "id": "nexus-app",
  "name": "NEXUS Desktop Trading Terminal",
  "track": "software",
  "status": "in-progress",
  "year": "2026",
  "summary": "Trading terminal merged into a single Electron desktop app: live candlestick charts, a signal-accuracy ledger, an options chain with Greeks, DCF equity research, and a multi-agent debate desk (analysts to bull/bear to trader to risk) running paper-only on a local model.",
  "body": [
   "Next.js 16 trading terminal that surfaces the Linda research stack as a polished UI. Live candlestick charts (configurable time ranges) backed by Polygon, signal accuracy metrics persisted across sessions, a price-alerts subsystem with localStorage persistence and live-price triggers, an options-chain viewer with Greeks, and a tabbed equity-research view (chart / options / DCF).",
   "Investor persona voting (Ramsey / Buffett / Cuban) layered on top of the predictions engine. CSV export of the trading history. Macro indicator bar streams live economic data into the dashboard. A shared SQLite database bridges the research backend to the desktop apps in the ecosystem. Built around the unified NEXUS Dark design system (OLED black + electric blue + glass cards + tabular numerals) shared across the three-app ecosystem."
  ],
  "tech": [
   "Next.js",
   "TypeScript",
   "Bun",
   "Polygon",
   "SQLite",
   "Claude API"
  ],
  "outcomes": [
   "nexus-web merged into the Electron app (Jun 2026)",
   "Multi-agent debate desk, paper-only",
   "Torch loaded lazily to fit 16GB"
  ],
  "next": [
   "Consolidate `lib/agents/` debate framework into Finance agent/nexus-app (Electron)",
   "Migrate persona voting + signal accuracy chart to the Electron host",
   "Decommission this Next.js port after the merge"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/nexus-app.webp",
   "alt": "NEXUS Trading Terminal",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Next.js",
   "TypeScript",
   "Bun",
   "Claude API"
  ]
 },
 {
  "id": "career-planner",
  "name": "Ascent, career tracker",
  "track": "software",
  "status": "in-progress",
  "year": "2026",
  "summary": "Flask + pywebview desktop app that runs the job search: an hour-by-hour day planner backed by a YAML schedule, application and goal tracking, a skills radar, a local-Ollama resume tailor that emits .docx, and an interactive Gantt aggregating every track.",
  "body": [
   "Flask + SQLite + YAML application served through a pywebview desktop window. Demonstrates a complete desktop-app stack: a Kanban board, a Chart.js radar comparing current vs target proficiency, milestone and action tracking with due dates, snapshot tiles, and tabbed sub-views.",
   "An embedded Claude-API chat panel pulls live data and summarizes documents on demand. A Cmd+K command palette provides keyboard-driven navigation across every view. Built to exercise the full pywebview + Flask + SQLite desktop pattern end to end."
  ],
  "tech": [
   "Flask",
   "Python",
   "SQLite",
   "Claude API",
   "Chart.js",
   "pywebview"
  ],
  "outcomes": [
   "Single source of truth for the job sprint",
   "Local Ollama resume tailor to .docx",
   "Two-way Gantt sync across every lane"
  ],
  "next": [
   "Markdown notes view sourced from docs/career/",
   "Cmd+K global jump-to-application search",
   "Sync controls_track.yaml status from the plc-track-app Tauri sibling"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/career-planner.webp",
   "alt": "Ascent roadmap view: a robotics and controls learning path with a job-ready skills checklist",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Flask",
   "Python",
   "Claude API"
  ]
 },
 {
  "id": "walrus",
  "name": "Walrus, local Ollama agent desktop",
  "track": "software",
  "status": "complete",
  "year": "2026",
  "summary": "Tauri 2 + React + Bun desktop app that runs a fully local agent on Ollama (qwen3:4b) with 7 tools. file ops, shell, web fetch, and clipboard. Ships as a desktop shortcut so the agent is one click away with no cloud round-trip.",
  "body": [
   "Walrus packages a local LLM agent into a native Windows app: a Tauri 2 shell wraps a React + Bun frontend that streams chat from a local Ollama server, exposing a 7-tool agent loop (read_file, write_file, list_dir, run_shell, web_fetch, get_clipboard, set_clipboard) for everyday workflows that should not leave the machine.",
   "Default model is qwen3:4b. small enough to run on the laptop's 4GB VRAM budget. Hardened against the i5-1240P + 16GB RAM envelope: tool calls stream incrementally, conversations persist to a Tauri appData store, and the desktop shortcut launches `dev.bat` so the user never has to remember a CLI. Built as the local-first counterweight to the Claude API agents."
  ],
  "tech": [
   "Tauri 2",
   "React",
   "TypeScript",
   "Bun",
   "Ollama",
   "Rust"
  ],
  "next": [
   "Screenshot tool + system-tray icon",
   "Wire MCP tool-server protocol for external agents",
   "Package as .msi installer with auto-update"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/walrus.webp",
   "alt": "Walrus desktop app: a local Ollama agent chat with the model picker in the header",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Tauri 2",
   "React",
   "TypeScript",
   "Bun",
   "Ollama"
  ]
 },
 {
  "id": "polymarked",
  "name": "PolyMarked, autonomous agent",
  "track": "software",
  "status": "in-progress",
  "year": "2026",
  "summary": "A single-process desktop agent with an event-driven architecture: a uv-workspace monorepo (8 packages) running a wallet watcher, decision engine, FastAPI dashboard, and Telegram bot together under one tray supervisor on a single asyncio event loop.",
  "body": [
   "PolyMarked is built as a clean systems-engineering exercise. A uv-workspace monorepo splits the system into eight independent packages: core, ingester, scoring, watcher, executor, telegram_bot, api, and app, communicating through typed schemas.",
   "Async SQLAlchemy and Alembic manage a SQLite (WAL) store; httpx drives concurrent ingestion; a supervisor runs the watcher, a localhost-only FastAPI dashboard, and a long-polling Telegram bot in one event loop with graceful shutdown and a system-tray icon. A paper-trading ledger tracks every fill with risk-cap validation. A scoring engine computes a confidence-weighted 0-100 score with profit factor, Sharpe-like ratio, drawdown, and sample-size calibration."
  ],
  "tech": [
   "Python",
   "asyncio",
   "SQLAlchemy",
   "FastAPI",
   "SQLite",
   "uv"
  ],
  "outcomes": [
   "8-package uv monorepo",
   "Watcher + API + bot in one event loop",
   "262 paper fills in a live supervisor run",
   "16+ unit tests",
   "1,500-event backtest",
   "Favorite-longshot edge survives costs only in 0.80-0.92 (+2%/bet out-of-sample)"
  ],
  "next": [
   "PyInstaller .exe packaging",
   "Expand integration-test coverage",
   "Structured metrics export from the supervisor"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/polymarked.webp",
   "alt": "PolyMarked Dashboard",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Python",
   "SQLite",
   "Ollama"
  ]
 },
 {
  "id": "tts-app",
  "name": "Local TTS Desktop App",
  "track": "software",
  "status": "complete",
  "year": "2026",
  "summary": "A local-first, MIT-licensed Windows text-to-speech app in PySide6: pluggable engines (neural-ONNX Piper, Windows SAPI5, eSpeak-NG), a global clipboard hotkey, and a typed, tested codebase. No cloud, no telemetry.",
  "body": [
   "A native desktop app built around a clean engine abstraction: a TTSEngine ABC with adapters for Piper (neural ONNX, CPU-only), Windows SAPI5, and eSpeak-NG, selected at runtime through a registry. The Qt (PySide6) UI provides a main window, an in-app voice browser that downloads Piper voice models on demand, a first-run wizard, and a tray icon.",
   "A global Ctrl+Alt+S hotkey reads the clipboard from any window. Configuration is pydantic-validated under %APPDATA%; audio plays through QAudioSink with optional WAV/MP3/OGG export via ffmpeg. The codebase ships with pytest, ruff, and mypy, and installs a Desktop/Start-Menu shortcut through a one-shot PowerShell script."
  ],
  "tech": [
   "Python",
   "PySide6",
   "ONNX",
   "Piper",
   "pydantic"
  ],
  "outcomes": [
   "3 pluggable TTS engines",
   "Neural ONNX (Piper) primary",
   "Typed + tested (mypy / ruff / pytest)",
   "MIT licensed"
  ],
  "next": [
   "Bundle Piper binaries into the installer",
   "Highlight-while-reading per paragraph",
   "Linux / macOS engine adapters"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/tts-app.webp",
   "alt": "TTS App",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Python",
   "ONNX"
  ]
 },
 {
  "id": "phantom-studio",
  "name": "Phantom Studio, video automation",
  "track": "software",
  "status": "in-progress",
  "year": "2026",
  "summary": "A full automated short-form video pipeline. script to TTS voiceover to Whisper-aligned captions to multi-clip + music compositing to multi-aspect render. wrapped in a Python + Electron desktop app. Built well outside my core lane to stretch into media + ML tooling. A second pipeline turns a YouTube URL into a captioned 9:16 clip on one machine: yt-dlp, faster-whisper on CUDA, an LLM segment picker and NVENC render.",
  "body": [
   "Phantom Studio is the project I built to push outside robotics and learn an end-to-end media pipeline. A Python engine (MoviePy v2) composes short-form videos: it generates a voiceover (Edge TTS), transcribes and time-aligns captions with Whisper ASR, stitches multiple clips with background music, and renders to 9:16, 16:9, and 1:1.",
   "An Electron + Python desktop shell drives it, with SQLite-backed job state, scheduling, Telegram failure alerts, a clip cache, and a one-click PyInstaller build. It defaults to fully local, $0 generation and degrades gracefully when heavier models exceed the laptop's memory budget. 172 tests passing, ffmpeg/ASR/render pipeline end to end.",
   "A single-user desktop pipeline with no Redis and no Celery. one worker polling a SQLite jobs table, which is all the concurrency the problem actually needs.",
   "Stages run independently from the CLI or get driven by the UI through that table: yt-dlp ingest cached by video id, faster-whisper distil-large-v3 on CUDA for word-level timing, an LLM pass that ranks segments and prints timestamped links so the picks can be checked against the source, then an NVENC 9:16 render with ASS captions burned in."
  ],
  "tech": [
   "Python",
   "Electron",
   "MoviePy",
   "Whisper",
   "ffmpeg",
   "SQLite",
   "faster-whisper",
   "yt-dlp",
   "ffmpeg / NVENC",
   "FastAPI"
  ],
  "outcomes": [
   "Script to render, fully automated",
   "9:16 / 16:9 / 1:1 output",
   "$0 local-default generation",
   "172 tests passing",
    "One SQLite job table instead of a task broker",
   "Nothing uploads without an explicit approval"
  ],
  "next": [
   "Optional paid render backends",
   "Platform-aware metadata generation",
   "Tighter low-memory model fallbacks",
   "Live LLM segment picks (M3)",
   "Wire the staging credentials (M6)"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/phantom-studio.webp",
   "alt": "Phantom Studio Make a video form: topic, platform, visual style and source clips",
   "width": 800,
   "height": 500
  },
  "skills": [
   "Python",
   "Ollama",
   "SQLite",
   "Linux",
   "Git"
  ]
 },
 {
  "id": "plc-python-bridge",
  "name": "plc-python-bridge, Allen Bradley tag I/O",
  "track": "controls",
  "status": "in-progress",
  "year": "2026",
  "summary": "Python library for reading and writing Allen Bradley Logix tags over EtherNet/IP (pycomm3) and OPC-UA (asyncua), with SQLite logging, threshold alerting, a live CLI dashboard, and a hardware-free simulator so it runs in CI.",
  "body": [
   "Most Python PLC libraries stop at a raw tag read. This one wraps ControlLogix / CompactLogix access in a single interface: zero-boilerplate reads and writes over EtherNet/IP via pycomm3, async OPC-UA subscriptions with callbacks via asyncua, SQLite tag logging with CSV export, and threshold alerting out to Telegram or email.",
   "A CLI dashboard renders live tag values without writing any application code. Because a real ControlLogix rack is not something you keep on a desk, the package ships a hardware-free simulator that stands in for the PLC, and that is what the tests and CI run against. the same pattern used to build the fleet telemetry work at Handwrytten before touching production machines."
  ],
  "tech": [
   "Python",
   "pycomm3",
   "EtherNet/IP",
   "OPC-UA",
   "SQLite"
  ],
  "outcomes": [
   "EtherNet/IP + OPC-UA behind one interface",
   "Hardware-free simulator for tests and CI",
   "SQLite tag logging with CSV export"
  ],
  "next": [
   "Validate against a physical CompactLogix rack",
   "Ship the alerting rules as declarative YAML"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Python",
   "Allen Bradley",
   "EtherNet/IP",
   "OPC-UA",
   "SQLite"
  ],
  "caseStudy": "plc-controls"
 },
 {
  "id": "plc-virtual-lab",
  "name": "PLC virtual lab: OpenPLC on DIN-Rail Hardware",
  "track": "controls",
  "status": "planned",
  "year": "2026",
  "summary": "A self-directed controls lab: IEC 61131-3 logic under the OpenPLC runtime on Arduino Opta Lite and Portenta Machine Control, with a real Modbus TCP link between stations captured in Wireshark. prototyped first against Factory I/O plants in CODESYS.",
  "body": [
   "The lab exists because most self-taught PLC projects live entirely inside a simulator. This one targets real DIN-rail hardware: two Arduino Opta Lite units as OpenPLC stations and a Portenta Machine Control as the line controller, wired button to relay to Modbus TCP, with the bus traffic captured in Wireshark as proof the link is real.",
   "Logic is authored in the OpenPLC Editor to IEC 61131-3. the shared standard that lets the same programs port to Allen Bradley CompactLogix later. Four study modules are written (scan cycle vs. loop, IEC 61131-3 fundamentals, the Modbus TCP bridge, and a conveyor capstone); the build itself is the current sprint, running against Factory I/O plants in CODESYS before the hardware phase."
  ],
  "tech": [
   "OpenPLC",
   "IEC 61131-3",
   "Modbus",
   "CODESYS",
   "Factory I/O",
   "Arduino Opta"
  ],
  "outcomes": [
   "4 study modules written",
   "Free-tool stack. no trial clocks",
   "IEC 61131-3 ports to CompactLogix"
  ],
  "next": [
   "Build the conveyor capstone against a Factory I/O plant in CODESYS",
   "Flash the OpenPLC runtime to the Opta / PMC stations",
   "Mirror the finished logic into Studio 5000"
  ],
  "media": {
   "kind": "none"
  },
  "skills": [
   "Modbus",
   "Studio 5000 / RSLogix",
   "Allen Bradley",
   "Python"
  ],
  "caseStudy": "plc-controls"
 },
 {
  "id": "mmm-money-hub",
  "name": "MMM: money hub",
  "track": "software",
  "status": "complete",
  "year": "2026",
  "summary": "Local-first Monarch-style personal-finance app for spending tracking and insights.",
  "body": [
   "The interesting constraint was giving financial advice without letting a model invent numbers. Advice comes from a deterministic rule engine first. the rules produce the claims, the model only phrases them. and the chat coach is grounded on that same rule output through a local qwen2.",
   "5:1.5b on Ollama, falling back to the raw rules whenever the model is unavailable. Around that sit an insights widget, inline tips, a weekly digest, launch nudges, and a settings toggle for every nudge. It ships as a hand-assembled portable Electron build (electron-builder is blocked on this machine by a code-signing symlink), and the packaged binary was verified to detect Ollama at runtime rather than only in dev."
  ],
  "tech": [
   "Electron",
   "TypeScript",
   "Bun",
   "Ollama",
   "SQLite",
   "Vitest"
  ],
  "outcomes": [
   "77 tests green",
   "Rule engine grounds every LLM claim",
   "Packaged .exe verified, not just dev mode"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/mmm-money-hub.webp",
   "alt": "MMM overview dashboard running on built-in sample data: coach insights, runway, net worth and cash flow",
   "width": 800,
   "height": 500
  },
  "skills": [
   "TypeScript",
   "Bun",
   "SQLite",
   "Ollama"
  ]
 },
 {
  "id": "plc-track-app",
  "name": "PLC Track, desktop learning tracker",
  "track": "software",
  "status": "complete",
  "year": "2026",
  "summary": "A Tauri 2 + React desktop app that tracks progress through the controls learning path from a YAML curriculum file. built because a tracker on the desktop actually gets opened and a browser tab does not.",
  "body": [
   "Small, deliberately: a YAML curriculum is the source of truth, React renders the week-by-week state, and Tauri 2 wraps it as a native window with filesystem access instead of a browser tab that gets closed and forgotten. The build surfaced two bugs worth remembering .",
   "js-yaml silently coercing date-shaped strings into Date objects (fixed by parsing under JSON_SCHEMA), and Vite emitting a crossorigin attribute that Tauri's asset protocol rejects."
  ],
  "tech": [
   "Tauri 2",
   "React",
   "TypeScript",
   "Bun",
   "js-yaml"
  ],
  "outcomes": [
   "Ships as a desktop .exe",
   "YAML curriculum as the single source of truth"
  ],
  "media": {
   "kind": "image",
   "src": "/projects/plc-track-app.webp",
   "alt": "PLC Track week 1 view: objective, vocabulary, lab path and deliverable checklist",
   "width": 800,
   "height": 500
  },
  "skills": [
   "TypeScript",
   "Bun",
   "Git"
  ]
 },
 {
  "id": "arcade-cabinet",
  "name": "Arcade Cabinet Enclosure",
  "track": "fabrication",
  "status": "in-progress",
  "year": "2026",
  "summary": "SolidWorks arcade cabinet enclosure: controls panel, side walls, screen mount, spool holder.",
  "body": [
   "The cabinet is a vertically-oriented enclosure designed to hold a small arcade monitor and a custom button and joystick controls panel. The side walls are tapered to save space and weight while maintaining structural rigidity under the monitor load.",
   "A screen mount at the top positions the display at standing eye level; a cable spool holder at the base routes power and signal wires behind the controls panel for a clean installation. The enclosure is sized for 3D printing in sections and post-assembly epoxy bonding."
  ],
  "tech": [
   "SolidWorks",
   "Mechanical Design",
   "3D Printing"
  ],
  "outcomes": [
   "Controls panel design",
   "Side walls",
   "Screen mount",
   "Cable spool holder"
  ],
  "media": {
   "kind": "none"
  }
 }
] satisfies Project[]

export const projectById: Record<string, Project> = {}
projects.forEach(p => {
 projectById[p.id] = p
})

export const indexProjects = projects
