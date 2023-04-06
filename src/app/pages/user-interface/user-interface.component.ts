import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Iclient } from 'src/app/interfaces/Iclient';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent {
  data!: Iclient;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.clientService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
