import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from '../../servicios/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos-search',
  templateUrl: './equipos-search.component.html',
  styleUrls: ['./equipos-search.component.scss'],
})
export class EquiposSearchComponent implements OnInit {
  public equipos: any = {
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

  searchForm: FormGroup;

  public isToken: boolean = false;

  constructor(
    private equipoService: EquipoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      searchBy: ['id'],
      id: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const searchBy = this.searchForm.value.searchBy;
    const id = this.searchForm.value.id;
    const startDate = this.searchForm.value.startDate;
    const endDate = this.searchForm.value.endDate;

    if (searchBy === 'id') {
      this.equipoService
        .getEquipoId(id)
        .subscribe((data: any) => (this.equipos = data));
    } else {
      this.equipoService
        .getEquipoFecha(startDate, endDate)
        .subscribe((data: any) => {
          this.equipos = data;
        });
    }
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
}
