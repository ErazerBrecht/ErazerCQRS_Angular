import { Action } from "@ngrx/store";
import { ITicket } from "../../entities/read/interfaces/iticket";

export const TICKETS_SET_ALL = "TICKETS_SET_ALL";
export const ADD_TICKET = "ADD_TICKET";

export class SetAllTickets implements Action {
    readonly type = TICKETS_SET_ALL;

    constructor(public payload: ITicket[]) { }
}

export class AddTicket implements Action {
    readonly type = ADD_TICKET;

    constructor(public payload: ITicket) { }
}

export type Actions =
    SetAllTickets
    | AddTicket;