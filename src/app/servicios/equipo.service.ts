import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Equipo } from '../models/equipo.model';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  private apiUrl: string = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient) {}

  //Método para obtener todos los equipos
  getAllEquipos(): Observable<Equipo[] | any> {
    return this.http.get(`${this.apiUrl}/equipos/listar/0/1500`).pipe(
      map((iterador: any) => {
        //console.log(iterador);
        return iterador.content;
      })
    );
  }

  //Método para crear un equipo
  crearEquipo(equipo: Equipo): Observable<Equipo> {
    const url = `${this.apiUrl}/equipos/crear`;
    return this.http.post<Equipo>(url, equipo);
  }

  //Método para actualizar un equipo
  actualizarEquipo(id: number) {
    const url = `${this.apiUrl}/actualizar/${id}`;
    this.http.put(url, id);
  }

  //Método para eliminar un equipo

  eliminarEquipo(id: number): Observable<Equipo[] | any> {
    return this.http.delete<Equipo>(`${this.apiUrl}/equipos/eliminar/${id}`);
  }

  //Método para obtener un equipo por id
  getEquipoId(id: number): Observable<Equipo[] | any> {
    const url = `${this.apiUrl}/equipos/consultar/${id}`;
    return this.http.get(url).pipe(
      map((iterador: any) => {
        const teamArray = Object.values(iterador);
        console.log(teamArray);
        return teamArray;
      })
    );
  }

  //Método para filtrar por rango de fecha
  getEquipoFecha(inicialDate: Date, finalDate: Date) {
    const url = `${this.apiUrl}/equipos/consultar/${inicialDate}/${finalDate}/`;
    return this.http.get(url).pipe(
      map((iterador: any) => {
        const teamArrayFecha = Object.values(iterador);
        console.log(teamArrayFecha);
        return teamArrayFecha;
      })
    );
  }
}
