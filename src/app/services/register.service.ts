import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../interfaces/Iclient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private urlApi = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public createUser(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this.urlApi, { name, email, password });
  }
}
