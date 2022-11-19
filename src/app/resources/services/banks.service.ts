import { Observable } from 'rxjs';
import { Bank } from './../models/Bank';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  public getBanks(): Observable<Bank[]> {
    const user = this.loginService.getUser()
    console.log('User id: ' + user.id)
    const headers = new HttpHeaders(({ Authorization: 'Basic ' + user.authData }))
    return this.httpClient.get<Bank[]>(`https://api.bankbox.com.br/v1/bank_accounts?user_id=${user.id}`, { headers })
  }
}
