import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Equipo } from '../../models/equipo.model';
import { EquipoService } from '../../servicios/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos-create',
  templateUrl: './equipos-create.component.html',
  styleUrls: ['./equipos-create.component.scss'],
})
export class EquiposCreateComponent implements OnInit {
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

  constructor(private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {}

  guardarEquipo(equipo: Equipo) {
    this.equipoService.crearEquipo(this.equipo).subscribe((result) => {
      Swal.fire('Éxito:', 'Se agrego el equipo con exito', 'success');
      this.router.navigate(['/equipos']);
    });
  }
}
