import { ITicket } from "../../entities/interfaces/iTicket";
import * as TicketActions from "../actions/ticket";

export function ticketsReducer(state: Array<ITicket> = [], action: TicketActions.Actions): Array<ITicket>
{
    switch(action.type)
    {
        case TicketActions.ActionTypes.TICKETS_SET_ALL:
            return [...action.payload.tickets];
        default:
            return state;
    }
}