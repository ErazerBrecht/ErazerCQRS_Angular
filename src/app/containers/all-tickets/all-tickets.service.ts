import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { READ_API } from "../../configuration/config";
import { Ticket } from "../../entities/read/ticket";
import 'rxjs/add/operator/map';

@Injectable()
export class AllTicketsService {
    constructor(private http: HttpClient) { }

    all(): Observable<Array<Ticket>> {
        return this.http.get<Ticket[]>(`${READ_API}/ticket`);
    }
}