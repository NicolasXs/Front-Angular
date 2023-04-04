import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public email!: string;
  public userName!: string;
  public password!: string;
  public password2!: string;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  register() {
    if (this.userName === undefined || this.email === undefined || this.password === undefined) {
      Swal.fire({
        icon: 'error',
        text: 'Algum campo está vazio, confirme os dados e tente novamente.',
      });
      return
    } else if (this.password !== this.password2) {
      Swal.fire({
        icon: 'error',
        text: 'As senhas precisão ser iguais.',
      });
    } else {
      this.registerService
        .createUser(this.userName, this.email, this.password)
        .subscribe((response: any) => {
          console.log('Dados cadastrados', response);
          this.router.navigate(['client']);
        });
    }
  }
}
