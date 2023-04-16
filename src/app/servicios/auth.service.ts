import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'https://wo-fifa.azurewebsites.net';
  constructor(private http: HttpClient) {}

  login(usuario: Usuario): Observable<any> | any {
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //const options = { withCredentials: true, headers };
    /* const options = {
      proxyUrl: `${this.apiUrl}/login`,
      withCredentials: true,
      headers,
    }; */
    localStorage.setItem('jwt', 'Hello');

    return true;

    return this.http.post<any>(`${this.apiUrl}/login`, usuario).pipe(
      map((response) => {
        return response;
        //const token = response.token;
        //localStorage.setItem('token', token);
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    return true;
  }
}
