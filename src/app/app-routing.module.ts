import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/public/main/main.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { MtoPersonaComponent } from './components/mto-persona/mto-persona.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LoginComponent } from './pages/public/login/login.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './services/guards/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/guards/role-guard.service';
import { AccountComponent } from './pages/private/account/account.component';
import { MediaComponent } from './pages/public/media/media.component';
import { SocialComponent } from './pages/public/social/social.component';
import { ComunidadComponent } from './pages/public/comunidad/comunidad.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'media', component: MediaComponent },
  { path: 'social', component: SocialComponent },
  { path: 'comunidad', component: ComunidadComponent },
  { path: 'asistentes', component: ListaPersonasComponent, canActivate: [RoleGuard], data: { roles: ["SUPERUSUARIO", "ADMINISTRADOR"] } },
  { path: 'new-asistente', component: MtoPersonaComponent, canActivate: [RoleGuard], data: { roles: ["SUPERUSUARIO", "ADMINISTRADOR"] } },
  { path: 'edit-asistente', component: MtoPersonaComponent, canActivate: [RoleGuard], data: { roles: ["SUPERUSUARIO", "ADMINISTRADOR"] } },
  { path: 'asistentes/:id', component: PersonaComponent, canActivate: [RoleGuard], data: { roles: ["SUPERUSUARIO", "ADMINISTRADOR"] } },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [RoleGuard], data: { roles: ["SUPERUSUARIO", "ADMINISTRADOR"] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
