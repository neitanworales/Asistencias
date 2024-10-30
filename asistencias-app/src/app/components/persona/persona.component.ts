import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PersonaDao } from '../../api/PersonaDao';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit  {
  persona!: Persona;

  constructor(
    private personaDao: PersonaDao) {
  }
  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() {
    this.personaDao.getPersonaById(1).subscribe(
      result => {
        this.persona = result.persona;
      }
    );
  }

}