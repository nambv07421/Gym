import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../components/header/header.component";
import { SideBarModule } from "../components/sidebar/sidebar.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [AuthLayoutComponent, MainLayoutComponent],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        SideBarModule,
        MatSidenavModule
    ], exports: [
        AuthLayoutComponent, MainLayoutComponent
    ]
})
export class LayoutModule {

}