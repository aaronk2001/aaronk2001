import { Cert } from './types'

export const certs = [
 {
 "id": "asu-bse",
 "name": "BSE Robotics Engineering",
 "issuer": "Arizona State University",
 "status": "complete",
 "url": "https://engineering.asu.edu/robotics/",
 "year": "2024",
 "note": "Foundation: kinematics, machine vision, controls, embedded systems. backs every project on this site."
 },
 {
 "id": "ur-academy",
 "name": "UR Academy Certification",
 "issuer": "Universal Robots",
 "status": "complete",
 "url": "https://academy.universal-robots.com",
 "year": "2023",
 "note": "Validates the UR5e / URScript work behind the LANL × ASU robotic glovebox project."
 },
 {
 "id": "google-mlcc",
 "name": "Machine Learning Crash Course",
 "issuer": "Google",
 "status": "in-progress",
 "url": "https://developers.google.com/machine-learning/crash-course",
 "year": "2026",
 "note": "Theory backbone for the YOLOv8 / Hailo edge inference work."
 },
 {
 "id": "rockwell-training",
 "name": "Rockwell Automation Training",
 "issuer": "Rockwell Automation",
 "status": "in-progress",
 "url": "https://www.rockwellautomation.com/en-us/training.html",
 "year": "2026",
 "note": "Validates Studio 5000 fluency for Automation Engineer resume track."
 },
 {
 "id": "fastai",
 "name": "Practical Deep Learning for Coders",
 "issuer": "fast.ai",
 "status": "in-progress",
 "url": "https://course.fast.ai",
 "year": "2026",
 "note": "Practical DL. pairs with Andrew Ng for theory + practice combo."
 },
 {
 "id": "osha-10",
 "name": "OSHA-10 General Industry",
 "issuer": "OSHA",
 "status": "planned",
 "url": "https://www.osha.gov/training/outreach/general-industry",
 "year": "2026",
 "note": "Cheap shop-floor cred for automation / manufacturing roles."
 },
 {
 "id": "comptia-a",
 "name": "CompTIA A+",
 "issuer": "CompTIA",
 "status": "planned",
 "url": "https://www.comptia.org/certifications/a",
 "year": "2026",
 "note": "Generalist IT breadth. useful for hybrid systems roles."
 },
 {
 "id": "six-sigma-yellow-belt",
 "name": "Six Sigma Yellow Belt",
 "issuer": "ASQ",
 "status": "planned",
 "url": "https://asq.org/cert/six-sigma-yellow-belt",
 "year": "2026",
 "note": "Process-improvement vocabulary for manufacturing / automation roles."
 },
 {
 "id": "comptia-linux-plus",
 "name": "CompTIA Linux+",
 "issuer": "CompTIA",
 "status": "planned",
 "url": "https://www.comptia.org/certifications/linux",
 "year": "2026",
 "note": "Validates the Linux / SRE foundation under the homelab and edge work."
 },
 {
 "id": "andrew-ng-ml",
 "name": "Machine Learning Specialization",
 "issuer": "DeepLearning.AI / Coursera",
 "status": "planned",
 "url": "https://www.deeplearning.ai/courses/machine-learning-specialization/",
 "year": "2026",
 "note": "Theory layer beneath the fast.ai practical work."
 },
 {
 "id": "tf-cert",
 "name": "TensorFlow Developer Certificate",
 "issuer": "Google",
 "status": "planned",
 "url": "https://www.tensorflow.org/certificate",
 "year": "2026",
 "note": "Portable proof of TF fluency for the CV / ML resume track."
 },
 {
 "id": "osha-30-general-industry",
 "name": "OSHA-30 General Industry",
 "issuer": "OSHA",
 "status": "planned",
 "url": "https://www.osha.gov/training/outreach/general-industry",
 "year": "2026",
 "note": "Senior shop-floor cred. natural step after OSHA-10."
 },
 {
 "id": "siemens-tia-basic",
 "name": "Siemens TIA Portal Basic",
 "issuer": "Siemens",
 "status": "planned",
 "url": "https://www.siemens.com/global/en/products/automation/industry-software/automation-software/tia-portal.html",
 "year": "2026",
 "note": "Second PLC ecosystem alongside Allen Bradley. broadens automation reach."
 },
 {
 "id": "aws-saa",
 "name": "AWS Solutions Architect Associate",
 "issuer": "Amazon Web Services",
 "status": "planned",
 "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
 "year": "2026",
 "note": "Cloud cred for full-stack / devops framing. pairs with the homelab work."
 },
 {
 "id": "ros-industrial-foundational",
 "name": "ROS-Industrial Foundational",
 "issuer": "ROS-Industrial Consortium",
 "status": "planned",
 "url": "https://rosindustrial.org/training/",
 "year": "2026",
 "note": "Industrial ROS2 cred for cobot / integrator roles."
 },
 {
 "id": "ccna",
 "name": "Cisco CCNA",
 "issuer": "Cisco",
 "status": "planned",
 "url": "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
 "year": "2026",
 "note": "Networking depth for plant-floor and edge deployments."
 },
 {
 "id": "nvidia-jetson-developer",
 "name": "NVIDIA Jetson AI Specialist",
 "issuer": "NVIDIA",
 "status": "planned",
 "url": "https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs",
 "year": "2026",
 "note": "Edge AI parallel to the Hailo work. opens a second deployment target."
 },
 {
 "id": "iso-13849-functional-safety",
 "name": "Functional Safety (ISO 13849)",
 "issuer": "TÜV / SICK",
 "status": "planned",
 "url": "https://www.sick.com/us/en/services/training/functional-safety/",
 "year": "2026",
 "note": "Required language for senior automation / cobot roles."
 },
 {
 "id": "fanuc-handling-tool",
 "name": "FANUC HandlingTool Operator",
 "issuer": "FANUC America",
 "status": "planned",
 "url": "https://www.fanucamerica.com/services/education/training-courses",
 "year": "2027",
 "note": "Industrial-arm cred adjacent to UR Academy. broadens robotics resume."
 },
 {
 "id": "dl-spec",
 "name": "Deep Learning Specialization",
 "issuer": "DeepLearning.AI",
 "status": "planned",
 "url": "https://www.deeplearning.ai/courses/deep-learning-specialization/",
 "year": "2027",
 "note": "Senior CV / ML credential, post-Andrew-Ng + fast.ai."
 }
] satisfies Cert[]
