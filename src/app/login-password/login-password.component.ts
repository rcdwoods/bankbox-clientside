import { LoginService } from './../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.css']
})
export class LoginPasswordComponent implements OnInit {

  name = "Richard"
  cpf = ""
  password = ""

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  getUserName() {
    var costumerName = this.loginService.costumerBasic?.firstName
    console.log(costumerName)
    if (costumerName == undefined) this.goToInitialPage()
    return costumerName
  }

  preLogin(cpf: String) {
    this.loginService.preLogin(cpf).subscribe(
      (data) => {console.log(data)},
      (error) => {console.error(error)}
      )
  }

  goToInitialPage() {
    this.router.navigateByUrl('');
  }
}
