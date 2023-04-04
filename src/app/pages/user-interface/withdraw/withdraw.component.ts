import { Component } from '@angular/core';
import { Iclient } from 'src/app/interfaces/Iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
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

  withdraw() {
    const _id = this.data._id;
    const balance = this.credit;
    this.clientService.balanceWithdraw(_id, balance).subscribe((response: any) => {
      console.log('Dados atualizados', response);
      this.getData();
      this.credit = 0;
    });
  }
}
