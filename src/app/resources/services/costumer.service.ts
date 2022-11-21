import { LoginService } from './login.service';
import { BalanceDetails } from './../models/BalanceDetails';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Costumer } from '../models/Costumer';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  public getBalanceDetails(): Observable<BalanceDetails> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<BalanceDetails>(`https://api.bankbox.com.br/v1/costumers/${user.id}/balance`, { headers })
  }

  public getCostumer(costumerId: Number): Observable<Costumer> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<Costumer>(`https://api.bankbox.com.br/v1/costumers/${costumerId}`, { headers })

  }
}
