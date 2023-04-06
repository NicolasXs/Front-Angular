import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccountService } from 'src/app/services/bank-account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
})
export class BankAccountComponent {
  public accountNumber!: number;
  public accountType!: string;
  public ownerId!: string;
  public balance: number = 0

  constructor(
    private bankAccount: BankAccountService,
    private router: Router
  ) {}

  register() {
    if (
      this.accountNumber === undefined ||
      this.accountType === undefined ||
      this.ownerId === undefined
    ) {
      Swal.fire({
        icon: 'error',
        text: 'Algum campo está vazio, confirme os dados e tente novamente.',
      });
      return;
    } else {
      this.bankAccount
        .createBankAccount(this.accountNumber, this.accountType, this.balance, this.ownerId)
        .subscribe((response: any) => {
          console.log('Dados cadastrados', response);
          this.router.navigate(['/']);
        });
    }
  }
}
