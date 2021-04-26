import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthModel } from 'src/app/models/authModel/auth.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() btnButton = "Đăng nhập";
  @Input() btnTitle = "Đăng nhập bằng tài khoản quản trị viên của bạn";
  @Output() onSubmit = new EventEmitter();
  @Output() onForgot = new EventEmitter();
  checkLogin = true;
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {


  }
  routoForgot() {
    this.router.navigateByUrl('forgot')
    this.checkLogin = !this.checkLogin;


  }
  submit() {
    this.onSubmit.emit(this.form.value)
  }

}
