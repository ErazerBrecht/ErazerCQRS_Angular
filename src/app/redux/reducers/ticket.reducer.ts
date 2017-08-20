import { ITicket } from "../../entities/read/interfaces/iTicket";
import * as TicketActions from "../actions/ticket";

export function ticketsReducer(state: Array<ITicket> = [], action: TicketActions.Actions): Array<ITicket>
{
    switch(action.type)
    {
        case TicketActions.TICKETS_SET_ALL:
            return [...action.payload];
        case TicketActions.ADD_TICKET:
            return [...state, action.payload];
        default:
            return state; 
    }
}