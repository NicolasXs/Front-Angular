import { Component } from '@angular/core';
import { Iclient } from 'src/app/interfaces/Iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  data!: Iclient;
  credit!: number;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.clientService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  deposit() {
    const _id = this.data._id;
    const balance = this.credit;
    this.clientService
      .balanceDeposit(_id, balance)
      .subscribe((response: any) => {
        console.log('Dados atualizados', response);
        this.getData();
        this.credit = 0;
      });
  }
}
