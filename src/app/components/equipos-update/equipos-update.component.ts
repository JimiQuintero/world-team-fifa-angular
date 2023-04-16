import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-equipos-update',
  templateUrl: './equipos-update.component.html',
  styleUrls: ['./equipos-update.component.scss'],
})
export class EquiposUpdateComponent {
  public equipo: Equipo = {
    id: 0,
    nombre: '',
    estadio: '',
    sitioweb: '',
    nacionalidad: '',
    fundacion: new Date(),
    entrenador: '',
    capacidad: 0,
    valor: 0,
  };
}
