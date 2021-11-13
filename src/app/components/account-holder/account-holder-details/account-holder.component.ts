import { Component, OnInit } from '@angular/core';
import {AccountHolder} from "../../../shared/model/AccountHolder";
import {AccountHolderService} from "../../../shared/services/account-holder.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.scss']
})
export class AccountHolderComponent implements OnInit {

  correntistas!: Array<AccountHolder>;




  constructor(private accountHolderService: AccountHolderService, private router:Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.accountHolderService.listar().subscribe((dado)=>{this.correntistas = dado, console.log(dado)})


  }

  editar(accountHolder: AccountHolder): void {

    this.router.navigate(['correntistas', accountHolder.id])

  }



}
