import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class SessionBehaivorService  {
    private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    public getRefresh(): Observable<boolean> {
        return this.refresh.asObservable();
    }

    public setRefresh(value: boolean):void{
        this.refresh.next(value);
    }
}