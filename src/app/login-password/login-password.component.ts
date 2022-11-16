import { LoginService } from './../resources/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.css']
})
export class LoginPasswordComponent implements OnInit {

  name = "Richard"
  cpf = ""
  password = ""

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  preLogin(cpf: String) {
    this.loginService.preLogin(cpf).subscribe(
      (data) => {console.log(data)},
      (error) => {console.error(error)}
      )
  }
}
