import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaDao } from '../../api/dao/PersonaDao';
import { UtilidadesDao } from '../../api/dao/UtilidadesDao';
import { Asistencia } from 'src/app/models/asistencias/Asistencia';
import { Persona } from 'src/app/models/Persona';

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
  ) { }

  ngOnInit(): void {
    this.loadSundays();
  }

  loadSundays() {
    this.utilidadesDao.getSundays(5).subscribe(
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

    let asistencias: Asistencia[] = []; 
    for(let i=0;i<this.all_selected_values.length;i++){
      asistencias.push(new Asistencia(this.all_selected_values[i]));
    }
    persona.asistencias = asistencias;
    this.personaDao.registrarNuevo(persona).subscribe(
      result => {
        console.log(result);
        if(result.code==201){
          alert("Registro creado correctamente");
        }else{
          alert("Error al guardar");
        }
      });
  }

  all_selected_values: Date[] = [];

  onChange(value: Date): void {
    if (this.all_selected_values.includes(value)) {
      this.all_selected_values = this.all_selected_values.filter((item) => item !== value);
    } else {
      this.all_selected_values.push(value);
    }
    console.log(this.all_selected_values);
  }

}
