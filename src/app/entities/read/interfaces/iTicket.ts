import { Priority } from "../priority";
import { Status } from "../status";

export interface ITicket {
    id: string;
    title: string;
    priority: Priority;
    status: Status;
}