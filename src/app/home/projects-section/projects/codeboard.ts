import { Project } from "../project.model";

export const ProjectCodeboard: Project = {
  title: "CodeBoard",

  thumbnail: "/assets/img/proj_codeboard_1.png",

  tags: ["MongoDB", "NodeJS", "Angular", "ExpressJS"],

  subtitle: "NodeJS | Angular | MongoDB",
  description:
    "An interactive platform for hosting coding competitions. " +
    "Create and maintain their coding profiles. " +
    "Signup and get to the admin panel to create challenges, define test cases and prizes. " +
    "Competers can test the accuracy and performance of their codes which runs in a sandbox on the nodeJS server. " +
    "Leaderboard provides live updates of scores in real time",
  gallery: [],

  links: [{
    type: "github",
    url: "https://raw.githubusercontent.com/mdakram28/codeboard/master/readme.md"
  }],

  readmeSrc: "https://github.com/mdakram28/codeboard"
};
