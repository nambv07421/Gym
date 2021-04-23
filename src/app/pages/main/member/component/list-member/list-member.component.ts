import { Component, OnInit } from '@angular/core';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {
  config = new MemberModel;
  listlable = [];
  data = [
    {
      "id": "1",
      "name": "Gói dịch vụ 1",
      "email": "12-1-200",
      "birth_date": "CICI",
      "phone": '0968744932',
      "address": '193 phus dien',

    },
    {
      "id": "2",
      "name": "Gói dịch vụ 2",
      "email": "nambv@gmail.com",
      "birth_date": "15-5-2000",
      "phone": '0968744932',
      "address": '193 phus dien',

    },
    {
      "id": "3",
      "name": "Gói dịch vụ 3",
      "email": "nambv@gmail.com",
      "birth_date": "15-5-2000",
      "phone": '0968744932',
      "address": '193 phus dien',
    },
    {
      "id": "4",
      "name": "Gói dịch vụ 4",
      "email": "nambv@gmail.com",
      "birth_date": "15-5-2000",
      "phone": '0968744932',
      "address": '193 phus dien',

    },
    {
      "id": "5",
      "name": "Gói dịch vụ 5",
      "email": "nambv@gmail.com",
      "birth_date": "15-5-2000",
      "phone": '0968744932',
      "address": '193 phus dien',

    }
  ]
  datalist = []
  constructor() { }

  ngOnInit(): void {
    this.listlable = this.config.table
    this.datalist = this.data
    console.log(this.listlable);

  }

}
