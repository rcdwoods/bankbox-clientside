import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginPasswordComponent } from './login-password/login-password.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { BanksComponent } from './banks/banks.component';
import { BanksChooseComponent } from './banks-choose/banks-choose.component';
import { TransferenceSelectComponent } from './transference-select/transference-select.component';
import { TransferenceValueComponent } from './transference-value/transference-value.component';
import { TransferenceBeneficiaryComponent } from './transference-beneficiary/transference-beneficiary.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { TransferenceSummaryComponent } from './transference-summary/transference-summary.component';
import { BanksConfirmComponent } from './banks-confirm/banks-confirm.component';
import { StatementComponent } from './statement/statement.component';
import { DatePipe } from '@angular/common';
import { PixComponent } from './pix/pix.component';
import { PixSelectComponent } from './pix-select/pix-select.component';
import { PixValueComponent } from './pix-value/pix-value.component';
import { PixBeneficiaryComponent } from './pix-beneficiary/pix-beneficiary.component';
import { PixSummaryComponent } from './pix-summary/pix-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    LoginPasswordComponent,
    RegisterComponent,
    HomeComponent,
    SettingsComponent,
    BanksComponent,
    BanksChooseComponent,
    TransferenceSelectComponent,
    TransferenceValueComponent,
    TransferenceBeneficiaryComponent,
    TransferenceSummaryComponent,
    BanksConfirmComponent,
    StatementComponent,
    PixComponent,
    PixSelectComponent,
    PixValueComponent,
    PixBeneficiaryComponent,
    PixSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    FormsModule,
    PasswordModule,
    HttpClientModule,
    MultiSelectModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
