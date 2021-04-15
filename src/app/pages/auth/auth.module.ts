import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { authRoutes } from "./auth.routes";
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from "src/app/layout/layout.module";

@NgModule({
    declarations: [
        AuthComponent,
        LoginFormComponent,
        LoginComponent,
        ForgotComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        FormsModule,
        LayoutModule
    ]
})
export class AuthModule {

}