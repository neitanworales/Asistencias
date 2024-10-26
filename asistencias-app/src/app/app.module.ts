import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { MtoPersonaComponent } from './mto-persona/mto-persona.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Utils } from './api/Utils';
import { PersonaDao } from './api/PersonaDao';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilidadesDao } from './api/UtilidadesDao';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    MtoPersonaComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
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
