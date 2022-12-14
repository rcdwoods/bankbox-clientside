import { BankAccount } from './../models/BankAccount';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  selectedBank?: BankAccount

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  public getBanks(): Observable<BankAccount[]> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<BankAccount[]>(`https://api.bankbox.com.br/v1/bank_accounts?user_id=${user.id}`, { headers })
  }

  public addBank(): Observable<BankAccount> {
    const user = this.loginService.getUser()
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    const bankAccount = {
      costumer_id: user.id,
      bank_name: this.selectedBank?.bank?.name
    }
    return this.httpClient.post<BankAccount>(`https://api.bankbox.com.br/v1/bank_accounts`, bankAccount, { headers })
  }
}
