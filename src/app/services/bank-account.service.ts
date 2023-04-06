import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../interfaces/Iclient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private urlApi = 'http://localhost:3000/bank-account';

  constructor(private http: HttpClient) {}

  public createBankAccount(accountNumber: number, accountType: string, balance: number ,owner: string): Observable<User> {
    return this.http.post<User>(this.urlApi, { accountNumber, accountType, balance, owner });
  }
}
 