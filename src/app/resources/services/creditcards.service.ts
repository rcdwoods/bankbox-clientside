import { CreditCard } from './../models/CreditCard';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  selectedCreditCard?: CreditCard

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  public getCreditCards(): Observable<CreditCard[]> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<CreditCard[]>(`https://api.bankbox.com.br/v1/credit_cards?customer_id=${user.id}`, { headers })
  }

  public unifyCreditCards(): Observable<CreditCard> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.post<CreditCard>(`https://api.bankbox.com.br/v1/credit_cards/unified?customer_id=${user.id}`, { headers })
  }

}
