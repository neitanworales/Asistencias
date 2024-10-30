import { Component, Input } from '@angular/core';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent {

  @Input()
  persona!: Persona;

}
