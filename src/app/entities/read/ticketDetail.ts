import { IEvent } from './interfaces/iEvent';
import { Priority } from "./priority";
import { Status } from "./status";
import { Ticket } from './ticket';

export class TicketDetail {
    id: string;
    title: string;
    priority: Priority;
    status: Status;

    // Details
    description: string;
    //type: Priority;             // TODO => Create 'Type' entity
    events: Array<IEvent>;

    toTicket(): Ticket {
        const ticket: Ticket =
        {
           id: this.id,
           title: this.title,
           priority: this.priority,
           status: this.status,
           // eventCount: this.events.length,
           // lastUpdate: this.events.reduce((a: IEvent, b: IEvent) => { return a.created > b.created ? a : b;}).created
        };

        return ticket;
    } 
}