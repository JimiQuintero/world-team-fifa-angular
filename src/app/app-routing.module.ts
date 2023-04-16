import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { EquiposCreateComponent } from './components/equipos-create/equipos-create.component';
import { EquiposUpdateComponent } from './components/equipos-update/equipos-update.component';
import { EquiposSearchComponent } from './components/equipos-search/equipos-search.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'equipos', component: EquiposListComponent },
  {
    path: 'equipos/create',
    component: EquiposCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'equipos/update/:id',
    component: EquiposUpdateComponent,
    canActivate: [AuthGuard],
  },

  { path: 'equipos/search', component: EquiposSearchComponent },
  { path: '**', redirectTo: '/equipos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
