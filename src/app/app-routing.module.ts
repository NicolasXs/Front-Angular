import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserInterfaceComponent } from './pages/user-interface/user-interface.component';
import { RegisterComponent } from './pages/register/register.component';
import { BankAccountComponent } from './pages/register/bank-account/bank-account.component';
import { DepositComponent } from './pages/user-interface/deposit/deposit.component';
import { WithdrawComponent } from './pages/user-interface/withdraw/withdraw.component';
import { CheckBalanceComponent } from './pages/user-interface/check-balance/check-balance.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'client', component: UserInterfaceComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-bank-account', component: BankAccountComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'check-balance', component: CheckBalanceComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
