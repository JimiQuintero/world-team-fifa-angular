import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isToken: boolean = false;

  @Output() logout = new EventEmitter<boolean>();

  constructor(
    private guard: AuthGuard,
    private auth: AuthService,
    private router: Router
  ) {
    this.isToken = this.guard.verifyToken();
  }

  ngOnInit(): void {
    this.logout.emit(this.guard.verifyToken());
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  onLogout() {
    this.auth.logout();
    const emiter: boolean = this.guard.verifyToken();
    this.logout.emit(emiter);
    this.isToken = emiter;
    this.router.navigate(['']);
  }
}
