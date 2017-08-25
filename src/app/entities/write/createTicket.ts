export class CreateTicket {
    title: string;
    description: string;
    priorityId: string;

    /**
     * Initialize a 'createTicket' entity.
     * This entity is used when an new ticket needs to be submitted to the backend.
     */
    constructor(title: string, description: string, priorityId: string) {
        this.title = title;
        this.description = description;
        this.priorityId = priorityId;     
    }
}