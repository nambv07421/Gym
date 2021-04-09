import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }
  dataNav = {
    home: [
      {
        icon: 'assets/img/nav/ic-account.svg',
        name: 'Bảng điều khiển',
        linkURL: '/main'
      }
    ],
    user: [
      {
        icon: 'assets/img/nav/ic-account.svg',
        name: 'Hội viên',
        linkURL: '/main/user'
      }
    ]
  };
  ngOnInit(): void {

  }

}
