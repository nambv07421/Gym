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
        icon: 'assets/images/sidebar/home.svg',
        name: 'Bảng điều khiển',
        linkURL: '/main/home'
      }
    ],
    user: [
      {
        icon: 'assets/images/sidebar/account.svg',
        name: 'Hội viên',
        linkURL: '/main/user'
      },
      {
        icon: 'assets/images/sidebar/account.svg',
        name: 'Huấn Luyện Viên',
        linkURL: '/main/trainer'
      },
      {
        icon: 'assets/images/sidebar/course.svg',
        name: 'Ca Làm',
        linkURL: '/main/shift'
      },
      {
        icon: 'assets/images/sidebar/notification.svg',
        name: 'Lịch Làm',
        linkURL: '/main/workday'
      }
    ],
    service: [
      {
        icon: 'assets/images/sidebar/income.svg',
        name: 'Hoá đơn',
        linkURL: '/main/invoice'
      },
      {
        icon: 'assets/images/sidebar/feedback.svg',
        name: 'Loại gói tập',
        linkURL: '/main/package'
      },
      {
        icon: 'assets/images/sidebar/marketplace.svg',
        name: 'Bộ môn',
        linkURL: '/main/subject'
      },
      {
        icon: 'assets/images/sidebar/income.svg',
        name: 'Giảm giá',
        linkURL: '/main/discount'
      }
    ],
    support: [
      {
        icon: 'assets/images/sidebar/income.svg',
        name: 'Bài viết',
        linkURL: '/main/post'
      },
      {
        icon: 'assets/images/sidebar/feedback.svg',
        name: 'Feedback',
        linkURL: '/main/feedback'
      },
      {
        icon: 'assets/images/sidebar/marketplace.svg',
        name: 'Liên Hệ',
        linkURL: '/main/contact'
      }
    ],
  };
  ngOnInit(): void {

  }

}
