import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { homeRouter } from "./home.routes";
import { DashboardComponent } from './component/dashboard/dashboard.component'
@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(homeRouter)
    ],
    exports: [
        HomeComponent,

    ]

})
export class HomeModule {

}