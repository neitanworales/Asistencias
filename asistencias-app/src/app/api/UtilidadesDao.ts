import { HttpClient } from "@angular/common/http";
import { SundaysResponse } from "../models/SundaysResponse";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Utils } from "./Utils";

@Injectable()
export class UtilidadesDao {
    constructor(
        private http: HttpClient,
        private utils: Utils){}

    public getSundays(count: Number):Observable<SundaysResponse> {
        return this.http.get<SundaysResponse>(environment.apiUrl+'/utils/getSundays?count='+count, { headers: this.utils.getHeaders() });
    }
}