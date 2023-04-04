import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Iclient } from 'src/app/interfaces/Iclient';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent  {
  data!: Iclient;

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

  // deposit() {
  //   const _id = this.data._id;
  //   const balance = this.credit;
  //   this.clientService.balanceDeposit(_id, balance).subscribe((response: any) => {
  //     console.log('Dados atualizados', response);
  //     this.getData();
  //     this.credit = 0;
  //   });
  // }  

  // withdraw() {
  //   const _id = this.data._id;
  //   const balance = this.credit;
  //   this.clientService.balanceWithdraw(_id, balance).subscribe((response: any) => {
  //     console.log('Dados atualizados', response);
  //     this.getData();
  //     this.credit = 0;
  //   });
  // }
}
