export interface Equipo {
  id: number;
  nombre: string;
  estadio: string;
  sitioweb?: string;
  nacionalidad: string;
  fundacion: Date;
  entrenador: string;
  capacidad: number;
  valor?: number;
}
