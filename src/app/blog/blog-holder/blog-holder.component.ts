import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit, Renderer2 } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { ScullyRoutesService } from "@scullyio/ng-lib";
import BLOGS from "../../../blogs/blogs.json";

@Component({
  selector: "app-blog-holder",
  templateUrl: "./blog-holder.component.html",
  styleUrls: ["./blog-holder.component.scss"],
})
export class BlogHolderComponent implements OnInit {
  articles$ = this.srs.available$;
  blog;

  liked = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private http: HttpClient,
    private srs: ScullyRoutesService
  ) {
    this.articles$.subscribe(console.log);
    this.route.params.subscribe((params) => {
      const slug = params.id.toLowerCase();
      this.blog = BLOGS.find((b) => b.slug.toLowerCase() == slug) || {
        title: "Article not found",
      };
      this.setSocialTags();
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
      this.linkGithubRepo();
  }

  setSocialTags() {
    this.titleService.setTitle(this.blog.title);
    this.meta.updateTag({ property: "og:title", content: this.blog.title });
    this.meta.updateTag({
      property: "og:description",
      content: this.blog.description,
    });
    this.meta.updateTag({
      property: "og:image",
      content: this.blog.image,
    });
    this.meta.updateTag({
      property: "og:type",
      content: "article",
    });
  }

  linkGithubRepo() {
    //Like Button
    // let script2 = document.createElement("script");
    // script2.src = "https://buttons.github.io/buttons.js";
    // script2.setAttribute("async", "");
    // script2.setAttribute("defer", "");
    // document.getElementById("blog").appendChild(script2);

    //Comments
    let script = document.createElement("script");
    script.type = `application/javascript`;
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", this.blog.repo);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "");
    document.getElementById("blog").appendChild(script);

  }
}
