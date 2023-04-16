import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from '../../servicios/equipo.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Equipo } from '../../models/equipo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.scss'],
})
export class EquiposListComponent implements OnInit {
  public equipos: any = [];

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

  public isToken: boolean = false;

  constructor(
    private equipoService: EquipoService,
    private router: Router,
    private guard: AuthGuard
  ) {}

  ngOnInit(): void {
    this.equipoService.getAllEquipos().subscribe((content: any) => {
      this.equipos = content;
      //console.log(this.equipos);
      //this.isToken = this.guard.verifyToken();
    });
  }

  eliminarEquipo(id: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¡No podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipoService.eliminarEquipo(id).subscribe((res) => {
          Swal.fire('Eliminado', 'El registro ha sido eliminado.', 'success');
        });
      }
    });
  }

  editarEquipo(id: number) {
    //console.log(id);
    this.equipoService.actualizarEquipo(id);
    this.router.navigate([`/equipos/update/${id}`]);
  }

  crearEquipo() {
    this.router.navigate(['/equipos/create']);
  }

  searchEquipos($event: any) {
    this.equipos = $event;
    console.log($event);
  }
}
