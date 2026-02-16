export interface Project {
  title: String;

  thumbnail: String;
  thumbnail_size?: "cover" | "contain";
  thumbnail_bg?: String;

  subtitle: String;
  description: String;

  tags: String[];

  gallery: String[];

  readmeSrc: String;

  links: {
    type: "github" | "youtube" | "website" | "other";
    url: String;
  }[];
}
