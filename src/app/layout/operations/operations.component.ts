import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {AccountHolderService} from "../../shared/services/account-holder.service";
import {AccountHolder} from "../../shared/model/AccountHolder";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  sidenavWidth = 4;

  constructor(private router: Router) {}

  ngOnInit() {}

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
// correntistas!: Array<AccountHolder>;


    /*constructor() {

    }

    ngOnInit(): void {
      // this.accountHolderService.listar().subscribe((dado)=>{this.correntistas = dado, console.log(dado)})
      //

    }

    // editar(accountHolder: AccountHolder): void {
    //
    //   this.router.navigate(['correntistas', accountHolder.id])
    //
    // }
  */
  }

}
