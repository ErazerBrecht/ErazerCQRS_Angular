import { Injectable } from "@angular/core";
import { Response, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { READ_API, WRITE_API } from "../../configuration/config";
import { TicketDetail } from "../../entities/read/ticketDetail";
import 'rxjs/add/operator/map';

@Injectable()
export class DetailTicketService {
    constructor(private http: Http) { }

    get (id: string): Observable<TicketDetail> {
        return this.http.get(`${READ_API}/ticket/${id}`)
            .map((res: Response) => res.json());
    }

    updatePriority (ticketId: string, priorityId: string){
        return this.http.put(`${WRITE_API}/ticket/priority`, { ticketId, priorityId });
    }

    updateStatus (ticketId: string, statusId: string){
        return this.http.put(`${WRITE_API}/ticket/status`, { ticketId, statusId });
    }
}