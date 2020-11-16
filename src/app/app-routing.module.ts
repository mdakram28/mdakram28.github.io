import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BlogHolderComponent } from "./blog/blog-holder/blog-holder.component";

const routes: Routes = [{path: "blog/:id", component: BlogHolderComponent}, { path: "**", component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
