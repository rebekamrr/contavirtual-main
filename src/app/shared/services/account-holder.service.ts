import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AccountHolder} from "../model/AccountHolder";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {
  URL_CORRENTISTAS = 'http://localhost:3000/correntistas'
  constructor(private http: HttpClient) { }

  listar(): Observable<AccountHolder[]>{
    return this.http.get<AccountHolder[]>(this.URL_CORRENTISTAS);
  }

  inserir(accountHolder: AccountHolder): Observable<AccountHolder>{
    return this.http.post<AccountHolder>(this.URL_CORRENTISTAS, accountHolder)
  }

  remover(id: number): Observable<object> {
    return this.http.delete<AccountHolder>(`${this.URL_CORRENTISTAS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<AccountHolder> {
    return this.http.get<AccountHolder>(`${this.URL_CORRENTISTAS}/${id}`)
  }

  atualizar(accountHolder: AccountHolder): Observable<AccountHolder> {
    return this.http.put<AccountHolder>(`${this.URL_CORRENTISTAS}/${accountHolder.id}`, accountHolder);

  }
}
