import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AccountModule} from "./components/account/account.module";
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    AccountModule,
    ComponentsModule,
    /***Não esquecer**/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
