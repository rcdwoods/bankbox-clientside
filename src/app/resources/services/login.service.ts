import { CostumerBasic } from './../models/CostumerBasic';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Costumer } from '../models/Costumer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public costumerBasic?: CostumerBasic

  constructor(private httpClient: HttpClient, private router: Router) { }

  public preLogin(cpf: String): Observable<CostumerBasic> {
    return this.httpClient.get<CostumerBasic>(`http://localhost:8080/v1/costumers/${cpf}/basic`)
  }

  public login(cpf: String, password: String): Observable<Costumer> {
    console.log(`cpf: ${cpf} password: ${password}`)
    var headers = new HttpHeaders(({ Authorization: 'Basic ' + btoa(cpf + ':' + password) }));
    return this.httpClient.get<Costumer>(`http://localhost:8080/v1/me`, { headers })
  }

  public logout() {
    localStorage.removeItem('auth')
    this.router.navigateByUrl('')
  }
}
