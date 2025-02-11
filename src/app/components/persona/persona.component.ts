import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PersonaDao } from '../../api/dao/PersonaDao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit  {

  id!: Number;
  persona!: Persona;

  constructor(
    private route: ActivatedRoute,
    private personaDao: PersonaDao) {
  }
  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.personaDao.getPersonaById(this.id).subscribe(
      result => {
        this.persona = result.persona;
      }
    );
  }

}