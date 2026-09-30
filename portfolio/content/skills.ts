import { SkillCluster } from './types'

export const skillClusters = [
 {
 "id": "robotics-&-systems",
 "label": "Robotics & Systems",
 "skills": [
 {
 "name": "ROS2",
 "url": "https://docs.ros.org",
 "level": "working",
 "note": "Robot arm ROS2 Jazzy workspace: kinematics, bringup, teleop.",
 "projects": [
 "robot-arm-v2"
 ]
 },
 {
 "name": "Python",
 "url": "https://docs.python.org/3/",
 "level": "core",
 "note": "Daily driver. The fleet control app, telemetry pipelines, every script.",
 "projects": [
 "linda-agent",
 "handwrytten-fleet"
 ]
 },
 {
 "name": "C++",
 "url": "https://cppreference.com",
 "level": "working",
 "note": "Embedded controller code + ROS2 nodes.",
 "projects": [
 "robot-arm-v2"
 ]
 },
 {
 "name": "UR5e / URScript",
 "url": "https://academy.universal-robots.com/",
 "level": "core",
 "note": "LANL × ASU glovebox. 6-DOF UR5e + flight-stick digital twin."
 },
 {
 "name": "Raspberry Pi 4/5",
 "url": "https://www.raspberrypi.com/documentation/",
 "level": "core",
 "note": "Edge inference + 12-node homelab + robot brains.",
 "projects": [
 "pi-fleet",
 "yolov8-hailo"
 ]
 },
 {
 "name": "MicroPython",
 "url": "https://docs.micropython.org",
 "level": "working",
 "note": "ESP32-S3 servo + stepper rigs (sevo.py, step.py).",
 "projects": [
 "robot-arm-cad"
 ]
 },
 {
 "name": "PCA9685",
 "url": "https://learn.adafruit.com/16-channel-pwm-servo-driver",
 "level": "working",
 "note": "PWM driver for the Pi Robot Arm V2 servo bus.",
 "projects": [
 "robot-arm-cad",
 "robot-arm-v2"
 ]
 },
 {
 "name": "TMC2209",
 "url": "https://www.trinamic.com/products/integrated-circuits/details/tmc2209-la/",
 "level": "learning",
 "note": "Stepper drivers for Robot Arm V2 (6× NEMA 17).",
 "projects": [
 "robot-arm-v2"
 ]
 }
 ]
 },
 {
 "id": "computer-vision-&-ml",
 "label": "Computer Vision & ML",
 "skills": [
 {
 "name": "YOLOv8",
 "url": "https://docs.ultralytics.com",
 "level": "working",
 "note": "Edge inference demos on the Hailo-8 NPU.",
 "projects": [
 "yolov8-hailo",
 "edge-defect-detection"
 ]
 },
 {
 "name": "OpenCV",
 "url": "https://docs.opencv.org",
 "level": "core",
 "note": "Vision pipelines on Pi and embedded Linux.",
 "projects": [
 "handwrytten-fleet",
 "fpv-robot-cv"
 ]
 },
 {
 "name": "Hailo-8 NPU",
 "url": "https://developer.hailo.ai/",
 "level": "learning",
 "note": "26 TOPS edge inference on Pi 5. CV/ML demo.",
 "projects": [
 "yolov8-hailo"
 ]
 },
 {
 "name": "ONNX",
 "url": "https://onnx.ai/get-started.html",
 "level": "working",
 "note": "Export pipeline feeding the Hailo compile toolchain.",
 "projects": [
 "yolov8-hailo"
 ]
 },
 {
 "name": "TensorFlow",
 "url": "https://www.tensorflow.org/learn",
 "level": "learning",
 "note": "Working through Google MLCC + TF Dev cert prep."
 },
 {
 "name": "PyTorch",
 "url": "https://pytorch.org/docs/stable/index.html",
 "level": "learning",
 "note": "Spine of the 12-week ML literacy track. Karpathy Zero-to-Hero from scratch."
 },
 {
 "name": "HF Transformers",
 "url": "https://huggingface.co/docs/transformers",
 "level": "learning",
 "note": "Pretrained models + fine-tuning on the ML literacy track (weeks 7-9)."
 },
 {
 "name": "HF Datasets",
 "url": "https://huggingface.co/docs/datasets",
 "level": "learning",
 "note": "Data pipelines for the literacy-track fine-tune (week 8)."
 },
 {
 "name": "Label Studio",
 "url": "https://labelstud.io/guide/",
 "level": "working",
 "note": "Defect dataset annotation for the QA pipeline.",
 "projects": [
 "edge-defect-detection"
 ]
 }
 ]
 },
 {
 "id": "controls-&-automation",
 "label": "Controls & Automation",
 "skills": [
 {
 "name": "Studio 5000 / RSLogix",
 "url": "https://www.rockwellautomation.com/en-us/support/documentation.html",
 "level": "working",
 "note": "Ladder logic for hardware-free controls lab and virtual automation.",
 "projects": [
 "plc-virtual-lab"
 ]
 },
 {
 "name": "Allen Bradley",
 "url": "https://www.rockwellautomation.com/en-us/support/documentation.html",
 "level": "working",
 "note": "CompactLogix bridge for PLC tag I/O and industrial integration.",
 "projects": [
 "plc-python-bridge"
 ]
 },
 {
 "name": "EtherNet/IP",
 "url": "https://www.odva.org/technology-standards/key-technologies/ethernet-ip/",
 "level": "working",
 "note": "PLC integration work via the plc-python-bridge library.",
 "projects": [
 "plc-python-bridge"
 ]
 },
 {
 "name": "OPC-UA",
 "url": "https://reference.opcfoundation.org/",
 "level": "learning",
 "note": "PLC to Python bridge for SCADA integrations.",
 "projects": [
 "plc-python-bridge"
 ]
 },
 {
 "name": "Modbus",
 "url": "https://modbus.org/tech.php",
 "level": "working",
 "note": "PLC simulator bridge and legacy hardware compatibility.",
 "projects": [
 "plc-python-bridge",
 "plc-virtual-lab"
 ]
 },
 {
 "name": "SCADA",
 "url": "https://www.inductiveautomation.com/resources/article/what-is-scada",
 "level": "working",
 "note": "Fleet telemetry and OEE. AWS status feed to SQL pipeline.",
 "projects": [
 "handwrytten-fleet"
 ]
 },
 {
 "name": "FactoryTalk View SE",
 "url": "https://www.rockwellautomation.com/en-us/products/software/factorytalk/operationsuite/view.html",
 "level": "learning",
 "note": "HMI screens for the controls lab Factory I/O simulator.",
 "projects": [
 "plc-virtual-lab"
 ]
 }
 ]
 },
 {
 "id": "fabrication",
 "label": "Fabrication",
 "skills": [
 {
 "name": "KiCAD",
 "url": "https://docs.kicad.org",
 "level": "core",
 "note": "V3 arm controller, generated from Python (SKiDL). The 4 production PCBs were EasyEDA.",
 "projects": [
 "pcb-robot-controller",
 "robot-arm-v2"
 ]
 },
 {
 "name": "SolidWorks",
 "url": "https://www.solidworks.com/sw/resources/solidworks-documentation.htm",
 "level": "core",
 "note": "Robot arm + server rack + welding cart design source.",
 "projects": [
 "robot-arm-cad"
 ]
 },
 {
 "name": "Fusion 360",
 "url": "https://help.autodesk.com/view/fusion360/ENU/",
 "level": "working",
 "note": "Organic fillets and export workflows for the arm CAD.",
 "projects": [
 "robot-arm-cad"
 ]
 },
 {
 "name": "3D Printing",
 "url": "https://help.prusa3d.com",
 "level": "core",
 "note": "PETG/PLA workflow. every fixture, bracket, and arm link.",
 "projects": [
 "robot-arm-cad"
 ]
 },
 {
 "name": "OpenSCAD",
 "url": "https://openscad.org/documentation.html",
 "level": "working",
 "note": "Parameterized servo horns and tool-changer mounts.",
 "projects": [
 "robot-arm-cad"
 ]
 },
 {
 "name": "MIG Welding",
 "url": "https://www.lincolnelectric.com/en-us/support/welding-how-to/Pages/mig-welding-basics-detail.aspx",
 "level": "learning",
 "note": "Welding cart Phase 1 in progress. fab fundamentals.",
 "projects": [
 "welding-cart"
 ]
 },
 {
 "name": "TIG Welding",
 "url": "https://www.lincolnelectric.com/en-us/support/welding-how-to/Pages/tig-welding-basics-detail.aspx",
 "level": "learning",
 "note": "Phase 3 of the welding curriculum. thinner stock work.",
 "projects": [
 "welding-cart"
 ]
 },
 {
 "name": "Sheet Metal",
 "url": "https://help.solidworks.com/2024/english/SolidWorks/sldworks/c_sheet_metal_overview.htm",
 "level": "working",
 "note": "Server-rack uprights with tab-and-slot self-fixturing."
 }
 ]
 },
 {
 "id": "foundations",
 "label": "Foundations",
 "skills": [
 {
 "name": "Linux",
 "url": "https://www.kernel.org/doc/html/latest/",
 "level": "core",
 "note": "Every Pi, every server, every dev environment.",
 "projects": [
 "pi-fleet",
 "homelab-monitoring"
 ]
 },
 {
 "name": "Git",
 "url": "https://git-scm.com/doc",
 "level": "core",
 "note": "All work versioned. including IaC and PCB sources."
 },
 {
 "name": "Docker",
 "url": "https://docs.docker.com",
 "level": "working",
 "note": "Compose stacks for monitoring + dev environments.",
 "projects": [
 "homelab-monitoring",
 "edge-defect-detection"
 ]
 },
 {
 "name": "Ansible",
 "url": "https://docs.ansible.com",
 "level": "working",
 "note": "8 playbooks provisioning the 12-node Pi fleet.",
 "projects": [
 "pi-fleet"
 ]
 },
 {
 "name": "k3s",
 "url": "https://docs.k3s.io",
 "level": "learning",
 "note": "Lightweight Kubernetes for the Pi cluster nodes.",
 "projects": [
 "pi-fleet"
 ]
 },
 {
 "name": "Prometheus",
 "url": "https://prometheus.io/docs/introduction/overview/",
 "level": "working",
 "note": "Cluster + service metrics across the homelab.",
 "projects": [
 "homelab-monitoring"
 ]
 },
 {
 "name": "Grafana",
 "url": "https://grafana.com/docs/grafana/latest/",
 "level": "working",
 "note": "3 dashboards in production. fleet, NAS, AI HAT.",
 "projects": [
 "homelab-monitoring"
 ]
 },
 {
 "name": "Loki",
 "url": "https://grafana.com/docs/loki/latest/",
 "level": "learning",
 "note": "Log aggregation across the 12-node Pi fleet.",
 "projects": [
 "homelab-monitoring"
 ]
 },
 {
 "name": "Flask",
 "url": "https://flask.palletsprojects.com",
 "level": "core",
 "note": "Ascent desktop app + the edge-defect dashboard.",
 "projects": [
 "career-planner",
 "edge-defect-detection"
 ]
 },
 {
 "name": "Next.js",
 "url": "https://nextjs.org/docs",
 "level": "working",
 "note": "Earlier Next.js 16 version of this portfolio and the NEXUS trading terminal."
 },
 {
 "name": "TypeScript",
 "url": "https://www.typescriptlang.org/docs/",
 "level": "core",
 "note": "Strict TS across Linda, Walrus, MMM and this portfolio's generator.",
 "projects": [
 "linda-agent",
 "walrus",
 "mmm-money-hub"
 ]
 },
 {
 "name": "Bun",
 "url": "https://bun.sh/docs",
 "level": "working",
 "note": "Default runtime for new TS work + this site."
 },
 {
 "name": "PostgreSQL",
 "url": "https://www.postgresql.org/docs/",
 "level": "working",
 "note": "Backing store for transactional features."
 },
 {
 "name": "SQLite",
 "url": "https://www.sqlite.org/docs.html",
 "level": "core",
 "note": "Ascent app DB + local data caches.",
 "projects": [
 "career-planner"
 ]
 },
 {
 "name": "Claude API",
 "url": "https://docs.anthropic.com",
 "level": "core",
 "note": "Linda agent + the Ascent research panel.",
 "projects": [
 "linda-agent",
 "career-planner"
 ]
 },
 {
 "name": "Ollama",
 "url": "https://github.com/ollama/ollama",
 "level": "working",
 "note": "Local LLM fallback in Linda + Walrus desktop app.",
 "projects": [
 "linda-agent"
 ]
 }
 ]
 }
] satisfies SkillCluster[]
