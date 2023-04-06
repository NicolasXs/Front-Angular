import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserInterfaceComponent } from './pages/user-interface/user-interface.component';
import { RegisterComponent } from './pages/register/register.component';
import { DepositComponent } from './pages/user-interface/deposit/deposit.component';
import { WithdrawComponent } from './pages/user-interface/withdraw/withdraw.component';
import { CheckBalanceComponent } from './pages/user-interface/check-balance/check-balance.component';
import { BankAccountComponent } from './pages/register/bank-account/bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInterfaceComponent,
    RegisterComponent,
    DepositComponent,
    WithdrawComponent,
    CheckBalanceComponent,
    BankAccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
