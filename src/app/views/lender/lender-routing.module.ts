import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositWithdrawalComponent } from './deposit-withdrawal/deposit-withdrawal.component';
import { DepositComponent } from './deposit-withdrawal/deposit/deposit.component';
import { ErrorComponent } from './deposit-withdrawal/error/error.component';
import { RegisterComponent } from './register/register.component';
import { WithdrawComponent } from './deposit-withdrawal/withdraw/withdraw.component';
import { InvestmentConfirmationComponent } from './investment-confirmation/investment-confirmation.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { InvestComponent } from './invest/invest.component';
import { ManualInvestmentComponent } from './manual-investment/manual-investment.component';
import { ProperlyRunningComponent } from './portfolio-details/properly-running/properly-running.component';

const routes: Routes = [
  { path: 'invest', component: InvestComponent },
  { path: 'manual-investment', component: ManualInvestmentComponent },
  { path: 'sign-up-lender', component: RegisterComponent },
  {
    path: 'deposit-withdrawal',
    component: DepositWithdrawalComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'deposit' },
      { path: 'deposit', component: DepositComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: '**', component: ErrorComponent }
    ]
  },
  {
    path: 'investment-confirmation',
    component: InvestmentConfirmationComponent
  },
  {
    path: 'portfolio-details',
    component: PortfolioDetailsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'properly-running' },
      { path: 'properly-running', component: ProperlyRunningComponent },
      { path: 'delayed', component: WithdrawComponent },
      { path: 'non-performing', component: WithdrawComponent },
      { path: 'finished', component: WithdrawComponent },
      { path: '**', component: ErrorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule {}
