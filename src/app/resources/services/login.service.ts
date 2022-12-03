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
    return this.httpClient.get<CostumerBasic>(`https://api.bankbox.com.br/v1/costumers/${cpf}/basic`)
  }

  public login(authData: string): Observable<Costumer> {
    var headers = new HttpHeaders(({ Authorization: 'Basic ' + authData }));
    return this.httpClient.get<Costumer>(`https://api.bankbox.com.br/v1/me`, { headers })
  }

  public logout() {
    localStorage.removeItem('auth')
    this.router.navigateByUrl('')
  }

  public getUser(): Costumer {
    return Object.assign(JSON.parse(localStorage.getItem('auth')!!) as Costumer, new Costumer())
  }
}
