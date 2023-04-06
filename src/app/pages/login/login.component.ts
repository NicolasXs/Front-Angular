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
    if (!this.email || !this.password) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, preencha todos os campos e tente novamente.',
      });
      return;
    }

    this.loginService.validateUser(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Dados liberados');
        this.clientService.getId(response._id);
        this.router.navigate(['client']);
      },
       (error: any) => {
        let errorMessage: string;
        if (error.status === 401) {
          errorMessage = 'E-mail ou senha inválidos.';
        } else if (error.status === 0) {
          errorMessage = 'Não foi possível conectar ao servidor.';
        } else {
          errorMessage = error.error.message;
        }
        Swal.fire({
          icon: 'error',
          text: `Ocorreu um erro: ${errorMessage}`,
        });
      }
    );
  }
}
