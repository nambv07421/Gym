import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  template: '',
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [

  ], exports: [
    MemberComponent
  ]
})
export class MemberModule {

}