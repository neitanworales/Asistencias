import { HttpClient } from "@angular/common/http";
import { Utils } from "./Utils";
import { Injectable } from "@angular/core";
import { PersonaResponse } from "../models/PersonaResponse";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Persona } from "../models/Persona";
import { DefaultResponse } from "../models/DefaultResponse";

@Injectable()
export class PersonaDao {
    constructor(
        private http: HttpClient,
        private utils: Utils){}

    public getPersonas():Observable<PersonaResponse> {
        return this.http.get<PersonaResponse>(environment.apiUrl+'/personas/', { headers: this.utils.getHeaders() });
    }

    public registrarNuevo(persona: Persona): Observable<DefaultResponse>{
        return this.http.post<DefaultResponse>(environment.apiUrl+'/personas/', persona, { headers: this.utils.getHeaders() });
    }
}
