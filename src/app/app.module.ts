import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './maiaek/login-component/login-component.component';
import { ManageBillComponent } from './maiaek/manage-bill/manage-bill.component';
import { CompanyComponent } from './maiaek/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ManageBillComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
