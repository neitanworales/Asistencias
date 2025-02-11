import { Persona } from "../Persona";

export class Session {
    nombre? : String;
    id?: BigInteger;
    staff?: boolean;
    email?: String;
    error?: boolean;
    mensaje?: String;
    token?: String;
    admin?: Boolean;
    persona? : Persona;
}
