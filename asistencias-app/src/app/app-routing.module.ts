import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { MtoPersonaComponent } from './components/mto-persona/mto-persona.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'asistentes', component: ListaPersonasComponent },
  { path: 'new-asistente', component: MtoPersonaComponent },
  { path: 'edit-asistente', component: MtoPersonaComponent },
  { path: 'asistente', component: PersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
