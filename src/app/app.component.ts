import { AfterViewInit, Component, HostListener } from "@angular/core";

declare const $;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  title = "portfolio";
  lines = "";
  startWebsiteTimeout = null;

  counts = {
    awards: 12,
    hacks: 24,
    projects: 42,
  };

  startWebsite() {
    if (this.startWebsiteTimeout) {
      clearTimeout(this.startWebsiteTimeout);
      this.startWebsiteTimeout = null;
    }
    $("body").addClass("slide-in-bottom");
    $(".console").hide();
    setTimeout(() => {
      $("body").removeClass("slide-in-bottom");
      $("body").removeClass("hidden");
    }, 500);
  }

  shouldShowTerminal(): boolean {
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
          $(document).on("keypress", this.startWebsite.bind(this));
          document.body.addEventListener(
            "click",
            this.startWebsite.bind(this),
            true
          );
          this.startWebsiteTimeout = setTimeout(
            this.startWebsite.bind(this),
            10000
          );
        });
      }, 1000);
    } else {
      $(".console").hide();
      $("body").toggleClass("hidden");
    }

    // const i1 = setInterval(() => {
    //   this.counts.awards += 1;
    //   if (this.counts.awards >= 12) clearInterval(i1);
    // }, 75);

    // const i2 = setInterval(() => {
    //   this.counts.hacks += 1;
    //   if (this.counts.hacks >= 24) clearInterval(i2);
    // }, 75);

    // const i3 = setInterval(() => {
    //   this.counts.projects += 1;
    //   if (this.counts.projects >= 42) clearInterval(i3);
    // }, 75);
  }

  startConsole(doneCallback) {
    let content = `^d050python portfolio.py
^w1000^d010
Welcome to Akram's Portfolio

AKRAM ANSARI
------------
Full Stack Developer | Blockchain Developer
^w1000
"Talk is cheap. Show me the code."
- Linus Torvalds
^w1000
Have a project or idea you'd like to discuss?^w1000
Let's chat mdakram28@gmail.com.
^w1000

`;

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
