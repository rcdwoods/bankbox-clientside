import { CostumerBasic } from './../resources/models/CostumerBasic';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.css']
})
export class LoginPasswordComponent implements OnInit {

  costumerBasic?: CostumerBasic = new CostumerBasic()
  name = ""
  password = ""

  constructor(private loginService: LoginService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  getUserName() {
    this.costumerBasic = this.loginService.costumerBasic
    var costumerName = this.costumerBasic?.firstName
    if (costumerName == undefined) this.goToInitialPage()
    return costumerName
  }

  login(password: string) {
    const authData = btoa(this.costumerBasic!!.cpf!! + ':' + password)
    this.loginService.login(authData).subscribe(
      (user) => {
        user.authData = authData
        localStorage.setItem('auth', JSON.stringify(user))
        this.router.navigateByUrl('home')
      },
      (error) => {this.toastrService.error('Senha incorreta :(')})
  }

  goToInitialPage() {
    this.router.navigateByUrl('');
  }
}
