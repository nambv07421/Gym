import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
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
  visibleIndex = -1;
  constructor() { }

  ngOnInit(): void {
    console.log(this.listlable);

  }
  showMenu(index, item) {
    if (this.visibleIndex === index) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = index;
    }
  }

}
@NgModule({
  declarations: [
    BaseTableComponent
  ],
  imports: [
    CommonModule,
  ],

  exports: [
    BaseTableComponent
  ]
})
export class BaseTableModule {

}