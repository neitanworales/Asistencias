import { DefaultResponse } from "./DefaultResponse";
import { Persona } from "./Persona";

export class PersonasResponse extends DefaultResponse {
    personas!: Persona[]
}