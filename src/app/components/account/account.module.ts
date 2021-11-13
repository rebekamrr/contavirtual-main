import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountDepositComponent } from './account-deposit/account-deposit.component';
import { AccountWithdrawalComponent } from './account-withdrawal/account-withdrawal.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AccountDetailsComponent,
    AccountDepositComponent,
    AccountWithdrawalComponent,
    AccountTransactionsComponent,

  ],
  exports: [
    AccountDepositComponent,
    AccountDetailsComponent,
    AccountWithdrawalComponent,
    AccountTransactionsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ]
})
export class AccountModule { }
