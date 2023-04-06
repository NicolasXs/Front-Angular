import { Component } from '@angular/core';
import { Iclient } from 'src/app/interfaces/Iclient';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

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
    this.clientService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log('Erro ao obter os dados do cliente', error);
      }
    );
  }
  
  withdraw() {
    const _id = this.data._id;
    const balance = this.credit;
    if (balance > 0 && balance <= this.data.balance) {
      this.clientService.balanceWithdraw(_id, balance).subscribe(
        (response: any) => {
          console.log('Dados atualizados', response);
          this.getData();
          this.credit = 0;
        },
        (error) => {
          console.log('Erro ao atualizar o saldo do cliente', error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Valor inválido para saque.',
      });
    }
  }
  
}
