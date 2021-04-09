import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { HeaderModule } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent],
  imports: [
    RouterModule,
    CommonModule,
    HeaderModule

  ], exports: [
    MainLayoutComponent,
    HeaderModule
  ]
})
export class MainLayoutModule { }
