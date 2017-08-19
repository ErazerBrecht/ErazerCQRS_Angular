import { Action } from "@ngrx/store";
import { ITicket } from "../../entities/read/interfaces/iticket";

export const ActionTypes = {
    TICKETS_SET_ALL:"TICKETS_SET_ALL"
}

export class SetAllTickets implements Action {
    type = ActionTypes.TICKETS_SET_ALL;
    payload: Readonly<{tickets: ITicket[]}>;

    constructor(tickets: ITicket[]){
        this.payload = {tickets};
    }
}

export type Actions = 
    SetAllTickets;