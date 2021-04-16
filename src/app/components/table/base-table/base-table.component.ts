import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  @Input() data: any;
  @Input() listlable: any;
  @Input() listActive?: any;
  @Output() callback = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [
    BaseTableComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    BaseTableComponent
  ]
})
export class BaseTableModule {

}