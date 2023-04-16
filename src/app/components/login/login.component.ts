import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: Usuario = {
    username: '',
    password: '',
  };

  constructor(private authservice: AuthService, private router: Router) {}

  onLogin() {
    localStorage.setItem('jwt', 'Hello');
    this.router.navigate(['equipos']);
    /* this.authservice.login(this.user).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['equipos']);
    }); */
    console.log(this.user);
  }
}
