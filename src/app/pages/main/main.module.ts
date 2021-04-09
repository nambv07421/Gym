import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainLayoutModule } from "src/app/layout/main-layout/main-layout.module";
import { MainComponent } from "./main.component";
import { mainRoutes } from "./main.routes";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes),
        MainLayoutModule,
    ]
})
export class MainModule {

}