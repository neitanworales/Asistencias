import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaDao } from '../api/PersonaDao';
import { Persona } from '../models/Persona';
import { UtilidadesDao } from '../api/UtilidadesDao';

@Component({
  selector: 'app-mto-persona',
  templateUrl: './mto-persona.component.html',
  styleUrls: ['./mto-persona.component.css']
})
export class MtoPersonaComponent implements OnInit {

  sundays!: Date[];

  constructor(
    private formBuilder: FormBuilder, 
    private personaDao: PersonaDao,
    private utilidadesDao: UtilidadesDao
  ) {}

  ngOnInit(): void {
    this.loadSundays();
  }

  loadSundays(){
    this.utilidadesDao.getSundays(4).subscribe(
      result => {
        this.sundays = result.sundays;
      }
    );
  }

  profileForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    telefono: [''],
    comentario: ['']
  });

  onSubmit() {
    let persona = this.profileForm.value as Persona;
    this.personaDao.registrarNuevo(persona).subscribe(
      result => {
        console.log(result);
    });
  }

}
