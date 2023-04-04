import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iclient } from '../interfaces/Iclient';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private urlApi = 'http://localhost:3000/bank-account';

  private userId!: string;

  constructor(private http: HttpClient) {
    this.userId = localStorage.getItem('userId') || '';
  }

  public getId(id: string): void {
    this.userId = id;
    localStorage.setItem('userId', this.userId);
  }

  public getData(): Observable<Iclient> {
    return this.http.get<Iclient>(`${this.urlApi}/owner/${this.userId}`);
  }

  public balanceDeposit(_id: string, balance: number): Observable<Iclient> {
    return this.http.patch<Iclient>(`${this.urlApi}/${_id}/deposit`, {
      balance,
    });
  }

  public balanceWithdraw(_id: string, balance: number): Observable<Iclient> {
    return this.http.patch<Iclient>(`${this.urlApi}/${_id}/withdraw`, {
      balance,
    });
  }
}
