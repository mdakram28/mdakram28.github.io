import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title = "portfolio";

  counts = {
    awards: 12,
    hacks: 24,
    publications: 6,
  };

  experience = [
    {
      role: "Senior Software Engineer",
      company: "Confluent",
      location: "Remote, Canada",
      date: "Dec 2024 — Present",
      description: "Developing enterprise Kafka for Confluent cloud. Working on high-throughput low-latency distributed storage for kafka.",
      tags: ["Kafka", "Distributed Systems", "Java", "Storage"],
    },
    {
      role: "Software Engineer",
      company: "Huawei",
      location: "Toronto, Canada",
      date: "Apr 2024 — Dec 2024",
      description: "Designed high throughput (~ 600 Mbps/node) change data capture in a cloud-native database (GaussDB) in C++. Extended PostgreSQL database to support columnar storage in GaussDB optimized for analytical query processing.",
      tags: ["C++", "Distributed Database", "PostgreSQL", "CDC"],
    },
    {
      role: "Research Assistant & Teaching Assistant",
      company: "University of Calgary",
      location: "Calgary, Canada",
      date: "Sep 2021 — Apr 2024",
      description: "Published 4 research papers and a Master's thesis on video streaming at renowned conferences (MMSys, NOSSDAV). Worked with AT&T Labs on HTTP Adaptive Streaming over QUIC.",
      tags: ["Video Streaming", "QUIC", "Research", "AV1"],
    },
    {
      role: "Software Engineer",
      company: "InterDigital",
      location: "Montreal, Canada",
      date: "Sep 2023 — Jan 2024",
      description: "Developed end-to-end VPCC point cloud video (XR) and haptics streaming library over WebRTC in C++. Built MP4 packager for MIHS immersive media.",
      tags: ["C++", "WebRTC", "XR"],
    },
    {
      role: "Google Summer of Code, VideoLAN (VLC)",
      company: "VideoLAN",
      location: "Remote",
      date: "May 2023 — Aug 2023",
      description: "Implemented 20 different playlist format parsers and VLC core modules in Rust with C++ interoperability.",
      tags: ["Rust", "VLC", "C++", "Open Source"],
    },
    {
      role: "Software Engineer",
      company: "Schlumberger",
      location: "Pune, India",
      date: "Jun 2019 — Aug 2021",
      description: "Led the development of ProSource, a kubernetes based Oil & Gas data processing system using C++, Java (Spring), Angular, PostgreSQL. Developed 99.8% available data ingestion services in Python (Flask) and Java on GCP and Azure.",
      tags: ["Python", "Java", "Kubernetes", "GCP", "Azure"],
    },
  ];

  showHiddenExperience = false;

  skills = [
    {
      category: "Languages",
      tags: ["C++", "Java", "Python", "Rust"]
    },
    {
      category: "Database Internals",
      tags: ["Distributed Storage", "Kafka", "Database Internals", "LSM Trees", "Columnar Storage", "CDC"]
    },
    {
      category: "Systems & Networking",
      tags: ["Multithreading", "Linux Kernel", "TCP/IP", "QUIC / HTTP/3", "Memory Management"]
    }
  ];

  education = [
    {
      degree: "Master of Science — Computer Science",
      school: "University of Calgary, Canada",
      date: "2021 — 2023",
    },
    {
      degree: "Bachelor of Technology — Information Technology",
      school: "Vellore Institute of Technology, India",
      date: "2015 — 2019",
    },
  ];

  publications = [
    {
      title: "Advancing Temporal and Quality Adaptation in Video Streaming with AV1",
      venue: "Master's Thesis, University of Calgary (2024) — Explores TASQ, SABR, and IFF techniques for smoothed playback.",
      url: "https://doi.org/10.11575/PRISM/43279",
    },
    {
      title: "TASQ: Temporal Adaptive Streaming over QUIC",
      venue: "ACM MMSys/NOSSDAV (2023) — Research with AT&T Labs on leveraging AV1 GOP structure for adaptive streaming.",
      url: "https://dl.acm.org/doi/10.1145/3587819.3590991",
    },
    {
      title: "IStream Player: A Versatile Video Player Framework",
      venue: "ACM NOSSDAV (2023) — A plugin-based player supporting 360° video, DASH, HLS, and QUIC TRANSPORT.",
      url: "https://dl.acm.org/doi/10.1145/3592473.3592569",
    },
    {
      title: "iStream: A Flexible Container-Based Testbed for Multimedia Streaming",
      venue: "ACM MMSys (2023) — A Docker-based testbed for reproducible multimedia streaming experiments.",
      url: "https://ieeexplore.ieee.org/document/10254429",
    },
    {
      title: "CRACS: Cross-Cloud Access Control Service for Multi-Cloud SaaS Applications",
      venue: "IEEE Cloud (2023) — Research on security and access control in multi-cloud environments.",
      url: "https://www.researchgate.net/publication/370690474_CRACS_Cross-Cloud_Access_Control_Service_for_Multi-Cloud_SaaS_Applications",
    },
    {
      title: "Bheem OS: Reasonably Secure OS Using Rust MicroVMs",
      venue: "Presented at NullCon Berlin (2022) — Secure operating system design using Rust-based micro virtual machines and OpenVMM.",
      url: "https://archive.nullcon.net/website/berlin-2022/speakers/bheem-OS.php",
    },
  ];

  toggleExperience(job: any) {
    job.collapsed = !job.collapsed;
  }

  constructor(private titleService: Title, private meta: Meta) {
    if (window.location.pathname.toLowerCase().startsWith("/av1-parser-gui")) {
      window.location.pathname = "media-parser-gui";
    }
  }

  goto(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
