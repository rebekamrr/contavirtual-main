import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHolderComponent } from './account-holder/account-holder-details/account-holder.component';
import { AccountHolderUpdateComponent } from './account-holder/account-holder-update/account-holder-update.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {AccountModule} from "./account/account.module";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AccountHolderComponent,
    AccountHolderUpdateComponent
  ],
  exports: [
    AccountHolderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    AccountModule,
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
export class ComponentsModule { }
