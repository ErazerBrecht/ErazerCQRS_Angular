import { Component, OnDestroy } from '@angular/core';
import { CreateTicket } from '../../entities/write/createTicket';
import { CreateTicketService } from './create-ticket.service';
import { PriorityValues } from '../../configuration/priorityConstants';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnDestroy {
  today = new Date();
  priorityValues = PriorityValues;

  private subscriptions: Array<Subscription> = [];

  constructor(private createService: CreateTicketService) { }

  onSave(ticket: CreateTicket): void {
    this.subscriptions.push(this.createService.add(ticket).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
