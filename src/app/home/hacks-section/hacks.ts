export class Hack {
  thumb: string;
  thumbColor?: string;
  thumbSize?: string;

  title: string;
  year: string;
  link?: string;
  winner?: boolean;
}

export const HACKS: Hack[] = [
  {
    thumb: "/assets/hacks/agora.png",
    thumbColor: "#fff",
    title: "Agora hack",
    year: "2021",
    link:
      "https://agoraio.devpost.com/?utm_campaign=agora-io-rtchack-2018.2018-06-01",
  },
  {
    thumb: "/assets/hacks/siemensmakeit.jpg",
    thumbColor: "#000",
    title: "Siemens MakeIT Real",
    year: "2019",
    link:
      "https://www.hackerearth.com/challenges/hackathon/siemens-makeit-real-2019/",
  },
  {
    thumb: "/assets/hacks/02_wehack2.jpg",
    thumbColor: "#1D1D1B",
    title: "WeHack 2.0 (Winner)",
    year: "2018",
    link:
      "https://www.thehindu.com/news/cities/chennai/vit-students-win-175-lakh-prize-money-in-hackathon/article25151930.ece",
    winner: true,
  },
  {
    thumb: "/assets/hacks/kpit_smh.jpg",
    thumbColor: "#fff",
    title: "Dover Smart India Hackathon (Winner)",
    year: "2018",
    winner: true,
  },
  {
    thumb: "/assets/hacks/01_hackharvard.svg",
    thumbColor: "#EC1C24",
    title: "Hack Harvard",
    year: "2017",
    link:
      "https://hackharvard-2017.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio",
  },
];
