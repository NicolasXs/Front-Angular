import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private clientService: ClientService
  ) {}

  login() {
    if (this.email == null || this.password == null) {
      Swal.fire({
        icon: 'error',
        text: 'Algum campo está vazio, confirme os dados e tente novamente.',
      });
    } else {
      this.loginService
        .validateUser(this.email, this.password)
        .subscribe((response: any) => {
          console.log('Dados liberados', response);
          this.router.navigate(['client']);
          this.clientService.getId(response._id);
        });
    }
  }
}
