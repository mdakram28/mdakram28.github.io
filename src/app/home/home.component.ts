import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

declare const $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  title = "portfolio";
  lines = "";
  startWebsiteTimeout = null;

  counts = {
    awards: 12,
    hacks: 24,
    projects: 42,
  };

  constructor(private titleService: Title, private meta: Meta) {
    this.startWebsite = this.startWebsite.bind(this);
  }

  startWebsite() {
    if (window.location.pathname.toLowerCase() === "/av1-parser-gui") {
        window.location.pathname = "/media-parser-gui";
    }
    clearTimeout(this.startWebsiteTimeout);
    $(document).off("click", this.startWebsite);
    $(document).off("keypress", this.startWebsite);

    // $("body").addClass("slide-in-bottom");
    $(".console").fadeOut();
    setTimeout(() => {
      $("body").removeClass("hidden");
      // $("body").removeClass("slide-in-bottom");
    }, 500);
  }

  shouldShowTerminal(): boolean {
    return false;
    try {
      const v = localStorage.getItem("firstVisited");
      if (!v) return true;
      const timeDiff = new Date().getTime() - new Date(v).getTime();
      if (timeDiff > 60 * 60 * 1000) return true;
    } catch (err) {}

    return false;
  }

  ngAfterViewInit(): void {
    if (this.shouldShowTerminal()) {
      setTimeout(() => {
        this.startConsole(() => {
          localStorage.setItem("firstVisited", new Date().toString());
          $(document).on("keypress", this.startWebsite);
          $(document).on("click", this.startWebsite);
          this.startWebsiteTimeout = setTimeout(this.startWebsite, 10000);
          console.log("Attached");
        });
      }, 1000);
    } else {
      $(".console").hide();
      $("body").toggleClass("hidden");
    }

    setInterval(() => {
      document
        .getElementById("scroll-icon")
        .classList.toggle("animate__fadeInDown");
    }, 5000);

    // this.titleService.setTitle("");
    // this.meta.updateTag({ name: "og:title", content: this.blog.title });
    // this.meta.updateTag({
    //   name: "og:description",
    //   content: this.blog.description,
    // });
    // this.meta.updateTag({
    //   name: "og:image",
    //   content: this.blog.image,
    // });
    // this.meta.updateTag({
    //   name: "og:type",
    //   content: "port",
    // });
  }

  startConsole(doneCallback) {
    let content = `^d050python portfolio.py
^w1000^d010
Welcome to Akram's Portfolio

AKRAM ANSARI
------------
Full Stack Developer | Blockchain Developer
^w1000
^d050"Talk is cheap. Show me the code."
- Linus Torvalds
^w1000

^d010`;

    if (this.isTouchDevice()) {
      content += "Touch anywhere on screen to continue ...";
    } else {
      content += "Press any key to continue ...";
    }

    let delay = 100;
    let cursor = 0;

    const printerFunc = () => {
      if (cursor >= content.length) return doneCallback();
      const c = content.charAt(cursor);
      if (c == "^") {
        const type = content.charAt(cursor + 1);
        switch (type) {
          case "d":
            delay = parseInt(content.substr(cursor + 2, cursor + 5));
            cursor = cursor + 5;
            setTimeout(printerFunc, delay);
            break;
          case "w":
            const wait = parseInt(content.substr(cursor + 2, cursor + 6));
            cursor = cursor + 6;
            setTimeout(printerFunc, wait);
            break;
        }
      } else {
        this.lines += c;
        cursor += 1;
        setTimeout(printerFunc, delay);
      }
    };

    $(".console").show();
    printerFunc();
  }

  isTouchDevice() {
    return "ontouchstart" in document.documentElement;
  }

  goto(id: string) {
    window.location.href = "#" + id;
  }
}
