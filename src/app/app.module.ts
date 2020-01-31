import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//SERVICIOS
import { DataService } from './servicios/data.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CaratulaComponent } from './components/caratula/caratula.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { ImgTecnologiaPipe } from './pipes/img-tecnologia.pipe';
import { ContactameComponent } from './components/contactame/contactame.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProyectosComponent,
    NavbarComponent,
    BotonComponent,
    ProyectoComponent,
    CaratulaComponent,
    TecnologiaComponent,
    ImgTecnologiaPipe,
    ContactameComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
