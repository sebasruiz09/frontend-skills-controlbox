import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ListarAComponent } from './components/listar-a/listar-a.component';
import { DetalleAComponent } from './components/detalle-a/detalle-a.component';
import { ListarBComponent } from './components/listar-b/listar-b.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpAdapter } from './services/http.service';
import { CreateDetailsComponent } from './components/create-details/create-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ListarAComponent,
    DetalleAComponent,
    ListarBComponent,
    CreateDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpAdapter],
})
export class HomeModule {}
