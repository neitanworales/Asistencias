import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { MtoPersonaComponent } from './components/mto-persona/mto-persona.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { Utils } from './api/Utils';
import { PersonaDao } from './api/PersonaDao';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilidadesDao } from './api/UtilidadesDao';
import { PersonaComponent } from './components/persona/persona.component';
import { DatosPersonaComponent } from './components/datos-persona/datos-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    MtoPersonaComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PersonaComponent,
    DatosPersonaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    Utils,
    PersonaDao,
    UtilidadesDao
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
