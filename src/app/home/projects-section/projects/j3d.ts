import { Project } from "../project.model";

export const ProjectJ3d: Project = {
  title: "3D Engine",

  thumbnail: "/assets/img/proj_j3d_1.jpg",
  thumbnail_size: "contain",
  thumbnail_bg: "#ededed",

  tags: ["Java", "Mathematics"],
  subtitle: "Some subtitle for J3D",
  description:
    "Efficient and Extendible 3d Engine written from scratch in java." +
    "Used perspective projection technique to translate 3D to 2D.",

  gallery: [
    "/assets/projects/j3d/screenshot_1.jpg",
    "/assets/projects/j3d/screenshot_2.jpg",
    "/assets/projects/j3d/screenshot_3.jpg",
    "/assets/projects/j3d/screenshot_4.jpg",
    "/assets/projects/j3d/screenshot_5.jpg",
    "/assets/projects/j3d/screenshot_6.jpg",
  ],

  readmeSrc: "https://raw.githubusercontent.com/mdakram28/J3D/master/readme.md",
  links: [{
    type: "github",
    url: "https://github.com/mdakram28/J3D"
  }]
};
