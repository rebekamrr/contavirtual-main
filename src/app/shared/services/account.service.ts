import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../model/Account";
import {AccountHolder} from "../model/AccountHolder";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  URL_CONTAS = 'http://localhost:3000/contas'
  constructor(private http: HttpClient) { }

  listar(): Observable<Account[]>{
    return this.http.get<Account[]>(this.URL_CONTAS);
  }

  inserir(account: Account): Observable<Account>{
    return this.http.post<Account>(this.URL_CONTAS, account)
  }

  remover(id: number): Observable<object> {
    return this.http.delete<Account>(`${this.URL_CONTAS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.URL_CONTAS}/${id}`)
  }

  atualizar(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.URL_CONTAS}/${account.id}`, account);

  }
}
