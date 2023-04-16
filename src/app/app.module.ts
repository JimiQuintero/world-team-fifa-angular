import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { EquiposCreateComponent } from './components/equipos-create/equipos-create.component';
import { EquiposUpdateComponent } from './components/equipos-update/equipos-update.component';
import { EquiposSearchComponent } from './components/equipos-search/equipos-search.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposListComponent,
    EquiposCreateComponent,
    EquiposUpdateComponent,
    EquiposSearchComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
