import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { mainRoutes } from "./main.routes";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes)

    ]
})
export class MainModule {

}