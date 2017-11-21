import { Injectable } from "@angular/core";
import { Response, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { READ_API } from "../../configuration/config";
import { Ticket } from "../../entities/read/ticket";
import 'rxjs/add/operator/map';

@Injectable()
export class AllTicketsService {
    constructor(private http: Http) { }

    all(): Observable<Array<Ticket>> {
        return this.http.get(`${READ_API}/ticket`)
            .map((res: Response) => res.json());
    }
}