import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [

  ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule {

}