import { Component } from '@angular/core';
import { Iclient } from 'src/app/interfaces/Iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css'],
})
export class CheckBalanceComponent {
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
}
