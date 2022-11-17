import { LoginService } from './../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf = ""

  constructor(private router: Router, private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  preLogin(cpf: string) {
    this.loginService.preLogin(cpf).subscribe(
      (data) => {
        console.log(data)
        this.loginService.costumerBasic = data
        this.goToPassword()
      },
      (error) => {this.toastr.error('Ops!', 'Usuário não encontrado :(')}
      )
  }

  goToPassword() {
    this.router.navigateByUrl('login-password', { skipLocationChange: true });
  }

}
