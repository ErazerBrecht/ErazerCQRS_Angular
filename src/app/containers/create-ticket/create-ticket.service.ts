import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import {Observable} from "rxjs/Observable";

import { CreateTicket } from '../../entities/write/createTicket';
import { WRITE_API } from "../../configuration/config";


@Injectable()
export class CreateTicketService {

  constructor(private http: Http) { }

  add(ticket: CreateTicket): Observable<Response> {
    return this.http.post(`${WRITE_API}/ticket`, ticket);
  }
}
