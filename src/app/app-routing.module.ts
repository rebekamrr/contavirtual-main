import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OperationsComponent} from "./layout/operations/operations.component";
import {AccountHolderComponent} from "./components/account-holder/account-holder-details/account-holder.component";
import {AccountDetailsComponent} from "./components/account/account-details/account-details.component";
import {AccountHolderUpdateComponent} from "./components/account-holder/account-holder-update/account-holder-update.component";
import {AccountDepositComponent} from "./components/account/account-deposit/account-deposit.component";

const routes: Routes = [

  {path:'correntistas',  component: AccountHolderComponent},
  {path:'correntistas/:id', component: AccountHolderUpdateComponent},
  {path:'contas/:id', component: AccountDetailsComponent},
  {path:'deposito', component: AccountDepositComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
