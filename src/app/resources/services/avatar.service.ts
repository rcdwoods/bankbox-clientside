import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private httpClient: HttpClient) { }

  getAvatarForName(name: string) {
    this.httpClient.get()
  }
}
