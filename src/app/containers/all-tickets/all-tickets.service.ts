import { Injectable } from "@angular/core";
import { Response, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { ITicket } from "../../entities/interfaces/iTicket";
import { READ_API } from "../../configuration/config";

@Injectable()
export class AllTicketsService {
    constructor(private http: Http) {

    }

    all(): Observable<Array<ITicket>> {
        return this.http.get(`${READ_API}/ticket`)
            .map((res: Response) => res.json());
    }
}