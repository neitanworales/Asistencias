import { Component, OnInit } from '@angular/core';
import { PersonaDao } from '../api/PersonaDao';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  personas!: Persona[];

  constructor(
    private personaDao: PersonaDao) {
  }

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() {
    this.personaDao.getPersonas().subscribe(
      result => {
        this.personas = result.personas;
      }
    );
  }

}
