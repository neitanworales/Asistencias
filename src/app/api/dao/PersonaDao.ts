import { HttpClient } from "@angular/common/http";
import { Utils } from "../Utils";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { DefaultResponse } from "src/app/models/DefaultResponse";
import { Persona } from "src/app/models/Persona";
import { PersonaResponse } from "src/app/models/PersonaResponse";
import { PersonasResponse } from "src/app/models/PersonasResponse";

@Injectable()
export class PersonaDao {
    constructor(
        private http: HttpClient,
        private utils: Utils){}

    public getPersonas():Observable<PersonasResponse> {
        return this.http.get<PersonasResponse>(environment.apiUrl+'/personas/', { headers: this.utils.getHeaders() });
    }

    public registrarNuevo(persona: Persona): Observable<DefaultResponse>{
        return this.http.post<DefaultResponse>(environment.apiUrl+'/personas/', persona, { headers: this.utils.getHeaders() });
    }

    public getPersonaById(id : Number):Observable<PersonaResponse> {
        return this.http.get<PersonaResponse>(environment.apiUrl+'/personas/?id='+id, { headers: this.utils.getHeaders() });
    }
}
