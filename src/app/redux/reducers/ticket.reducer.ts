import { Ticket } from "../../entities/read/ticket";
import * as TicketActions from "../actions/ticket";
import * as SharedActions from "../actions/sharedTicket";

export function ticketsReducer(state: Array<Ticket> = [], action: TicketActions.Actions): Array<Ticket>
{
    switch(action.type)
    {
        case TicketActions.TICKETS_SET_ALL:
            return [...action.payload];
        case SharedActions.ADD_TICKET:
            return [...state, action.payload.toTicket()];
        case SharedActions.UPDATE_TICKET_STATUS:
            return state.map(ticket => ticket.id === action.payload.ticketId ? Object.assign({}, ticket, { eventCount: ticket.eventCount++, lastUpdate: action.payload.created, status: action.payload.toStatus}) : ticket);   
        case SharedActions.UPDATE_TICKET_PRIORITY:
            return state.map(ticket => ticket.id === action.payload.ticketId ? Object.assign({}, ticket, { eventCount: ticket.eventCount++, lastUpdate: action.payload.created, priority: action.payload.toPriority}) : ticket);
        case SharedActions.ADD_TICKET_COMMENT:
            return state.map(ticket => ticket.id === action.payload.ticketId ? Object.assign({}, ticket, { eventCount: ticket.eventCount++, lastUpdate: action.payload.created }) : ticket);  
        default:
            return state; 
    }
}