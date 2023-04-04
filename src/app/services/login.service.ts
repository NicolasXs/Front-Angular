import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/Iclient';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private urlApi = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) {}

  public validateUser(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.urlApi, { email, password });
  }
}
