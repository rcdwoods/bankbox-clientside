import { Observable } from 'rxjs';
import { CostumerRegister } from './../models/CostumerRegister';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {

  }

  public register(costumerRegister: CostumerRegister): Observable<CostumerRegister> {
    return this.httpClient.post<CostumerRegister>('http://localhost:8080/v1/costumers', costumerRegister)
  }
}
