import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPassword() {
    this.router.navigateByUrl('login-password', { skipLocationChange: true });
  }

}
