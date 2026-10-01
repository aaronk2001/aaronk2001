[Back to portfolio](../README.md)

# Edge inference on a Raspberry Pi 5

**Hailo-8L NPU, YOLOv8 + ByteTrack, Florence-2 defect demo**<br>
<sub>2026 | Computer vision and ML</sub>

One Raspberry Pi 5 (16 GB) with a Hailo-8L AI HAT+ (13 TOPS). YOLOv8n with ByteTrack runs at 144.7 FPS on the NPU after a profiling fix, and an open-vocabulary defect demo built on Florence-2 is in progress.

<table><tr><td align="center"><b>144.7 FPS</b><br><sub>YOLOv8n on the Hailo-8L</sub></td><td align="center"><b>6.84 ms</b><br><sub>p50 inference latency</sub></td><td align="center"><b>13 TOPS</b><br><sub>Hailo-8L NPU</sub></td><td align="center"><b>1 Pi 5</b><br><sub>16 GB, everything on-device</sub></td></tr></table>

`Raspberry Pi 5` `Hailo-8L NPU` `YOLOv8` `ByteTrack` `ONNX` `Florence-2` `Python`

## YOLOv8 on Hailo-8L NPU

**Problem**

- Real-time object detection on a Raspberry Pi CPU alone is too slow for responsive visual feedback.
- Offloading to a GPU adds cost and power consumption. An edge NPU solves this on a Raspberry Pi form factor.

**Constraints**

- Hailo-8L output format (HEF) requires model compilation with quantization-aware calibration.
- The 13 TOPS compute budget must be shared between inference and any preprocessing.

**What I built**

- Starting from an Ultralytics YOLOv8n checkpoint, the model is exported to ONNX and compiled to Hailo Executable Format with quantization-aware calibration on a representative COCO subset.
- The compiled HEF runs entirely on the Hailo-8L AI HAT+ (13 TOPS) over PCIe, leaving all four CPU cores free for pre and post processing.
- The first working pipeline re-entered network group activation and reopened the inference streams on every frame. Opening both once at startup took a 500-frame benchmark from 80.99 to 144.74 FPS, with p50 latency falling from 12.06 to 6.84 ms and p95 from 13.10 to 7.31 ms.
- Fixed a drawing bug that swapped x and y on every box, and made the live loop infer only new frames so its FPS is real throughput. A USB webcam ran 60 s at 15.0 FPS with every frame inferred: the camera is the bottleneck, not the NPU.

<table><tr><td align="center"><b>13 TOPS</b><br><sub>Hailo-8L inference</sub></td><td align="center"><b>144.7 FPS</b><br><sub>yolov8n 640x640, up from 81</sub></td><td align="center"><b>6.8 ms</b><br><sub>p50 inference latency</sub></td><td align="center"><b>YOLOv8n</b><br><sub>compiled to HEF</sub></td></tr></table>

## VLM-based defect grounding

**Problem**

- Traditional object detection requires a fine-tuned model for each defect class. Training data collection is tedious and models overfit to specific lighting or part geometry.
- Open-vocabulary grounding with a vision-language model removes the need for dataset labeling.

**Constraints**

- VLMs like Florence-2 are memory-heavy. Splitting the vision tower (to Hailo) and language head (to CPU) requires careful model export and stitching.
- Inference latency must stay under 5 seconds per frame for practical inspection station speed.

**What I built**

- The pipeline pivots from a classic YOLO fine-tune toward open-vocabulary defect grounding with Microsoft Florence-2. The DaViT vision tower exports to ONNX and compiles to a Hailo-8L HEF (13 TOPS, AI HAT) so the encoder runs on the NPU while the language head and decoder run on the Pi 5 CPU at roughly 2 to 4 seconds per frame.
- Well-matched to a defect inspection station rather than a real-time line. Prompts use the `<CAPTION_TO_PHRASE_GROUNDING>` task with defect classes (scratch, crack, chip, missing pin, dent) and return bounding boxes plus natural-language explanations.
- A systemd service runs Flask dashboard for interactive image upload, with Docker Compose staging the full inference pipeline.
- A CPU-only fallback path runs Florence-2 entirely on the Pi 5 CPU if HEF compilation of the vision tower stalls.

<table><tr><td align="center"><b>Open-vocabulary</b><br><sub>defect grounding</sub></td><td align="center"><b>No labeled dataset</b><br><sub>required</sub></td><td align="center"><b>2-4 sec/frame</b><br><sub>inference on Pi 5</sub></td><td align="center"><b>Flask + Docker</b><br><sub>staging pipeline</sub></td></tr></table>

## Related projects

- [YOLOv8 edge inference on Hailo-8L](../projects.md#yolov8-edge-inference-on-hailo-8l)
- [AI HAT + VLM Defect Demo](../projects.md#ai-hat--vlm-defect-demo)

---

**More case studies:** [Robotic fleet at production scale](handwrytten-fleet.md) | [Six-axis robot arm, from CAD to firmware](robot-arm.md) | [PLC integration and a controls lab](plc-controls.md) | [LANL Robotic Glovebox](lanl-glovebox.md)

[Back to portfolio](../README.md)
