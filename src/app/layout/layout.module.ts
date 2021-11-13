import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations/operations.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {AccountModule} from "../components/account/account.module";
import {ComponentsModule} from "../components/components.module";
import {AccountHolderModule} from "../components/account-holder/account-holder.module";
import {AppRoutingModule} from "../app-routing.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
    declarations: [
        OperationsComponent,
        HomeComponent
    ],
    exports: [
        OperationsComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        FormsModule,
        AccountModule,
        ComponentsModule,
        AccountHolderModule,
        AppRoutingModule,
        MatCheckboxModule,
        MatToolbarModule
    ]
})
export class LayoutModule { }
