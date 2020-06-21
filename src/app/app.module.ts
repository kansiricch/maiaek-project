import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './maiaek/login-component/login-component.component';
import { ManageBillComponent } from './maiaek/manage-bill/manage-bill.component';
import { CompanyComponent } from './maiaek/company/company.component';
import { HeaderComponent } from './maiaek/header/header.component';
import { ReportBillComponent } from './maiaek/report-bill/report-bill.component';
import { FooterComponent } from './maiaek/footer/footer.component';
import { ReportPoComponent } from './maiaek/report-po/report-po.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    LoginComponentComponent,
    ManageBillComponent,
    HeaderComponent,
    ReportBillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
