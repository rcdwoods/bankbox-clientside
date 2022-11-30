import { StatementComponent } from './statement/statement.component';
import { BanksConfirmComponent } from './banks-confirm/banks-confirm.component';
import { TransferenceSummaryComponent } from './transference-summary/transference-summary.component';
import { TransferenceBeneficiaryComponent } from './transference-beneficiary/transference-beneficiary.component';
import { TransferenceValueComponent } from './transference-value/transference-value.component';
import { TransferenceSelectComponent } from './transference-select/transference-select.component';
import { BanksChooseComponent } from './banks-choose/banks-choose.component';
import { BanksComponent } from './banks/banks.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginPasswordComponent } from './login-password/login-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'login-password', component: LoginPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'choose-bank', component: BanksChooseComponent },
  { path: 'transference', component: TransferenceSelectComponent },
  { path: 'transference-value', component: TransferenceValueComponent },
  { path: 'transference-beneficiary', component: TransferenceBeneficiaryComponent },
  { path: 'transference-summary', component: TransferenceSummaryComponent },
  { path: 'confirm-bank', component: BanksConfirmComponent },
  { path: 'statement', component: StatementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
