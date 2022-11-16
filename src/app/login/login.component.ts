import { LoginService } from './../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf = ""

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  preLogin(cpf: String) {
    this.loginService.preLogin(cpf).subscribe(
      (data) => {console.log(data)},
      (error) => {console.error(error)}
      )
  }

  goToPassword() {
    this.router.navigateByUrl('login-password', { skipLocationChange: true });
  }

}
