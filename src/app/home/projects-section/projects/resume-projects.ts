import { Project } from "../project.model";

export const ProjectOpenVMM: Project = {
    title: "Thorstream",
    subtitle: "Distributed Streaming Broker in Rust",
    thumbnail: "/assets/projects/resume/openvmm.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#1f3558",
    description:
        "Built a Kafka-compatible streaming broker with append-only segmented storage, consumer groups, partitioned logs, replication, leader election, and operational metrics. Includes compatibility APIs plus a React operations dashboard.",
    tags: ["Rust", "Distributed Systems", "Kafka", "Replication", "Storage"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/thorstream/main/README.md",
    links: [
        { type: "github", url: "https://github.com/mdakram28/thorstream" },
        { type: "website", url: "https://mdakram.com/thorstream/" },
    ],
};

export const ProjectRoverX: Project = {
    title: "CodeBoard",
    subtitle: "Online Judge & Contest Platform",
    thumbnail: "/assets/img/proj_codeboard_1.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#2a2f45",
    description:
        "Developed a multi-language coding contest platform with challenge lifecycle management, sandboxed code execution queue, realtime test-case feedback via sockets, and submission scoring/leaderboard workflows.",
    tags: ["Node.js", "Express", "MongoDB", "Realtime", "Execution Engine"],
    gallery: [],
    readmeSrc: "",
    links: [{ type: "github", url: "https://github.com/mdakram28/codeboard" }],
};

export const ProjectSyncLib: Project = {
    title: "DAgro",
    subtitle: "Blockchain-Powered Agriculture Marketplace",
    thumbnail: "/assets/img/proj_agroshare_1.jpg",
    thumbnail_size: "cover",
    thumbnail_bg: "#2d5034",
    description:
        "Implemented smart-contract-backed community economics for farming workflows: member shares, deposits, valuation, and task assignment/verification on Ethereum with a Web3 + Truffle DApp frontend.",
    tags: ["Solidity", "Ethereum", "Web3", "Truffle", "Smart Contracts"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/dagro/main/README.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/dagro" }],
};

export const ProjectVideoLab: Project = {
    title: "J3D Engine",
    subtitle: "Software 3D Rendering Engine in Java",
    thumbnail: "/assets/img/proj_j3d_1.jpg",
    thumbnail_size: "cover",
    thumbnail_bg: "#ededed",
    description:
        "Built a modular Java 3D renderer from scratch using custom geometric primitives, projection math, plane sorting, clipping/intersection logic, and interactive camera movement controls.",
    tags: ["Java", "Rendering", "Linear Algebra", "Engine Design"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/j3d/main/readme.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/j3d" }],
};

export const ProjectMediaParsers: Project = {
    title: "Media Parsers GUI",
    subtitle: "Web-based Media Analyzer",
    thumbnail: "/assets/projects/resume/mediaparsers.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#4caf50", // Green
    description:
        "Built an in-browser AV1/HEVC/MP4/IVF bitstream explorer with container auto-detection, syntax tree visualization, raw hex inspection, and track extraction/download workflows.",
    tags: ["TypeScript", "React", "Bitstream Parsing", "AV1", "HEVC"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/media-parser-gui/main/README.md",
    links: [
        { type: "github", url: "https://github.com/mdakram28/media-parser-gui" },
        { type: "website", url: "https://mdakram.com/media-parser-gui/" },
    ],
};

export const ProjectThorstream: Project = {
    title: "OpenArt",
    subtitle: "Content Provenance on Blockchain + IPFS",
    thumbnail: "/assets/projects/resume/videolab.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#7b4397",
    description:
        "Designed a decentralized media-sharing prototype that stores content on IPFS and records ownership/payment metadata on Ethereum smart contracts to improve provenance and misuse resistance.",
    tags: ["IPFS", "Ethereum", "Web3.js", "DApp", "Content Security"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/openart/main/README.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/openart" }],
};
