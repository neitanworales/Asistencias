import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { MtoPersonaComponent } from './components/mto-persona/mto-persona.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/public/main/main.component';
import { Utils } from './api/Utils';
import { PersonaDao } from './api/dao/PersonaDao';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilidadesDao } from './api/dao/UtilidadesDao';
import { PersonaComponent } from './components/persona/persona.component';
import { DatosPersonaComponent } from './components/datos-persona/datos-persona.component';
import { LoginComponent } from './pages/public/login/login.component';
import { SocialComponent } from './pages/public/social/social.component';
import { LoginDao } from './api/dao/LoginDao';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthService } from './services/guards/auth.service';
import { RoleGuardService } from './services/guards/role-guard.service';
import { SessionBehaivorService } from './services/SessionBehaivorService';
import { AccountComponent } from './pages/private/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    MtoPersonaComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PersonaComponent,
    DatosPersonaComponent,
    LoginComponent,
    SocialComponent,
    DashboardComponent,
    AccountComponent
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
    UtilidadesDao,
    LoginDao,
    AuthGuardService,
    AuthService,
    RoleGuardService,
    SessionBehaivorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
