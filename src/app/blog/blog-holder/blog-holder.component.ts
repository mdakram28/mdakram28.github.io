import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import BLOGS from "../../../assets/blogs.json";

@Component({
  selector: "app-blog-holder",
  templateUrl: "./blog-holder.component.html",
  styleUrls: ["./blog-holder.component.scss"],
})
export class BlogHolderComponent implements OnInit {
  blog;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta
  ) {
    this.route.params.subscribe((params) => {
      const slug = params.id.toLowerCase();
      this.blog = BLOGS.find((b) => b.slug.toLowerCase() == slug);

      // Social
      this.titleService.setTitle(this.blog.title);
      this.meta.updateTag({ name: "og:title", content: this.blog.title });
      this.meta.updateTag({
        name: "og:description",
        content: this.blog.description,
      });
      this.meta.updateTag({
        name: "og:image",
        content: this.blog.image,
      });
      this.meta.updateTag({
        name: "og:type",
        content: "article",
      });
    });
  }

  ngOnInit(): void {}
}
