import { CostumerBasic } from './../models/CostumerBasic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public costumerBasic?: CostumerBasic

  constructor(private httpClient: HttpClient) { }

  public preLogin(cpf: String): Observable<CostumerBasic> {
    return this.httpClient.get<CostumerBasic>(`http://api.bankbox.com.br/v1/costumers/${cpf}/basic`)
  }

  public login(cpf: String, password: String) {

  }
}
