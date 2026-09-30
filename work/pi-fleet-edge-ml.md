[Back to portfolio](../README.md)

# Twelve-node Pi cluster with edge inference

**Kubernetes, Hailo-8 NPU, YOLOv8 vision, Prometheus telemetry**<br>
<sub>2026 | Infrastructure and ML</sub>

A 12-node Raspberry Pi 4 and Pi 5 cluster running k3s Kubernetes, with Prometheus/Grafana observability. A Hailo-8 AI HAT runs real-time YOLOv8 object detection (26 TOPS) while Florence-2 vision-language models ground defects on production parts.

<table><tr><td align="center"><b>12</b><br><sub>nodes</sub></td><td align="center"><b>26 TOPS</b><br><sub>Hailo-8 NPU</sub></td><td align="center"><b>11</b><br><sub>Ansible playbooks</sub></td><td align="center"><b>k3s</b><br><sub>orchestration</sub></td></tr></table>

`Kubernetes (k3s)` `Ansible` `Prometheus` `Grafana` `Hailo-8 NPU` `YOLOv8` `Raspberry Pi 4/5` `Docker`

## Infrastructure and Kubernetes

**Problem**

- Running a distributed robotics pipeline requires managing multiple Raspberry Pi units across SSH, Docker images, and configuration files.
- Without infrastructure as code, each node becomes a snowflake and test environments don't mirror production.

**Constraints**

- Raspberry Pi hardware is resource-constrained (4GB to 8GB RAM per node, 2.4 GHz CPU).
- Network isolation on commodity WiFi limits throughput and reliability.

**What I built**

- Every node is provisioned from a clean Raspberry Pi OS image using idempotent Ansible roles covering SSH hardening, package installation, static IP assignment, and service deployment.
- k3s provides lightweight Kubernetes orchestration for containerized workloads, with Helm charts tracked in the repository.
- Prometheus scrapes metrics from all nodes and feeds Grafana dashboards for CPU, memory, disk, and network visibility.

<table><tr><td align="center"><b>12</b><br><sub>nodes (Pi 4 and Pi 5)</sub></td><td align="center"><b>11</b><br><sub>Ansible playbooks</sub></td><td align="center"><b>k3s</b><br><sub>Kubernetes on edge</sub></td></tr></table>

## Observability and alerting

**Problem**

- Distributed Pi fleet generates logs and metrics across 12 nodes. Without centralized collection, troubleshooting becomes manual log-digging on each machine.
- Alerts on CPU, memory, or network saturation need to surface quickly to prevent cascade failures.

**Constraints**

- Prometheus and Grafana themselves consume RAM and storage. The stack must run on the same constrained hardware it monitors.
- Alert rules must be specific enough to catch real issues without flooding on false positives.

**What I built**

- Prometheus pulls metrics from every node at 30-second intervals; Grafana renders dashboards with node-level CPU, memory, disk, and network health.
- AlertManager triggers on CPU above 80%, memory above 85%, disk above 90%, and network errors. Each alert includes context and a runbook link.
- Loki (optional) ships container logs to a central store for historical analysis and debugging.
- The stack is fully containerized so upgrades roll across the fleet with zero downtime.

<table><tr><td align="center"><b>Prometheus</b><br><sub>metrics collection</sub></td><td align="center"><b>Grafana</b><br><sub>visualization</sub></td><td align="center"><b>AlertManager</b><br><sub>firing alerts</sub></td><td align="center"><b>12-node visibility</b><br><sub>in one UI</sub></td></tr></table>

## YOLOv8 on Hailo-8 NPU

**Problem**

- Real-time object detection on a Raspberry Pi CPU alone is too slow for responsive visual feedback.
- Offloading to a GPU adds cost and power consumption. An edge NPU solves this on a Raspberry Pi form factor.

**Constraints**

- Hailo-8 output format (HEF) requires model compilation with quantization-aware calibration.
- The 26 TOPS compute budget must be shared between inference and any preprocessing.

**What I built**

- Starting from an Ultralytics YOLOv8n checkpoint, the model is exported to ONNX and compiled to Hailo Executable Format with quantization-aware calibration on a representative COCO subset.
- The compiled HEF runs entirely on the Hailo-8 AI HAT+ (26 TOPS) over PCIe, leaving all four CPU cores free for pre and post processing.
- The first working pipeline re-entered network group activation and reopened the inference streams on every frame. Opening both once at startup took a 500-frame benchmark from 80.99 to 144.74 FPS, with p50 latency falling from 12.06 to 6.84 ms and p95 from 13.10 to 7.31 ms.
- Fixed a drawing bug that swapped x and y on every box, and made the live loop infer only new frames so its FPS is real throughput. A USB webcam ran 60 s at 15.0 FPS with every frame inferred: the camera is the bottleneck, not the NPU.

<table><tr><td align="center"><b>26 TOPS</b><br><sub>Hailo-8 inference</sub></td><td align="center"><b>144.7 FPS</b><br><sub>yolov8n 640x640, up from 81</sub></td><td align="center"><b>6.8 ms</b><br><sub>p50 inference latency</sub></td><td align="center"><b>YOLOv8n</b><br><sub>compiled to HEF</sub></td></tr></table>

## VLM-based defect grounding

**Problem**

- Traditional object detection requires a fine-tuned model for each defect class. Training data collection is tedious and models overfit to specific lighting or part geometry.
- Open-vocabulary grounding with a vision-language model removes the need for dataset labeling.

**Constraints**

- VLMs like Florence-2 are memory-heavy. Splitting the vision tower (to Hailo) and language head (to CPU) requires careful model export and stitching.
- Inference latency must stay under 5 seconds per frame for practical inspection station speed.

**What I built**

- The pipeline pivots from a classic YOLO fine-tune toward open-vocabulary defect grounding with Microsoft Florence-2. The DaViT vision tower exports to ONNX and compiles to a Hailo-8 HEF (26 TOPS, AI HAT) so the encoder runs on the NPU while the language head and decoder run on the Pi 5 CPU at roughly 2 to 4 seconds per frame.
- Well-matched to a defect inspection station rather than a real-time line. Prompts use the `<CAPTION_TO_PHRASE_GROUNDING>` task with defect classes (scratch, crack, chip, missing pin, dent) and return bounding boxes plus natural-language explanations.
- A systemd service runs Flask dashboard for interactive image upload, with Docker Compose staging the full inference pipeline.
- A CPU-only fallback path runs Florence-2 entirely on the Pi 5 CPU if HEF compilation of the vision tower stalls.

<table><tr><td align="center"><b>Open-vocabulary</b><br><sub>defect grounding</sub></td><td align="center"><b>No labeled dataset</b><br><sub>required</sub></td><td align="center"><b>2-4 sec/frame</b><br><sub>inference on Pi 5</sub></td><td align="center"><b>Flask + Docker</b><br><sub>staging pipeline</sub></td></tr></table>

## Mechanical enclosure

**Problem**

- 12 Raspberry Pi units need organized mounting, cable routing, and passive cooling in a compact form factor.
- A loose stack overheats and tangles cables. A proper rack provides structure and airflow.

**Constraints**

- Standard racks are too large for a small lab footprint.
- 3D-printed plastic adds constraints on load-bearing capacity.

**What I built**

- The enclosure is a server-rack-compatible cabinet designed to house all 12 Raspberry Pi 4 and Pi 5 units in a vertical stack.
- The pi4_rack part provides mounting slots for each compute node with airflow channels for passive cooling between each tier.
- Side-wall bases add structural support and cable management channels for Ethernet and power distribution.
- The full assembly includes aluminum mounting rails, power-distribution busbar clips, and preparation for future network switch and storage integration.

<table><tr><td align="center"><b>12-node</b><br><sub>vertical stack</sub></td><td align="center"><b>Passive cooling</b><br><sub>airflow channels</sub></td><td align="center"><b>Cable management</b><br><sub>integrated</sub></td><td align="center"><b>Expandable</b><br><sub>for future gear</sub></td></tr></table>

## Related projects

- [12-Node Pi Homelab](../projects.md#12-node-pi-homelab)
- [Homelab Monitoring Stack](../projects.md#homelab-monitoring-stack)
- [YOLOv8 edge inference on Hailo-8](../projects.md#yolov8-edge-inference-on-hailo-8)
- [AI HAT + VLM Defect Demo](../projects.md#ai-hat--vlm-defect-demo)
