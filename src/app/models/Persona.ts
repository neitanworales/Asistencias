import { Asistencia } from "./asistencias/Asistencia";
import { Nota } from "./asistencias/Nota";

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