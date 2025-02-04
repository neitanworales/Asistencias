import { Asistencia } from "./Asistencia";
import { Nota } from "./Nota";

export class Persona {
    id!: number;
    nombre!: string;
    telefono!: string;
    diezmo!: boolean;
    ofrenda!: boolean;
    kit!: boolean;
    propedeutico!: boolean;
    religion!: string;
    residencia!: string;
    llegoPor!: string;
    comentario!: string;
    status!: string;
    activo!: boolean;
    created!: Date;
    asistencias!: Asistencia[];
    notas!: Nota[];
}