import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreateTicket } from '../../entities/write/createTicket';
import { CreateTicketService } from './create-ticket.service';
import { PriorityValues } from '../../configuration/priorityConstants';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit, OnDestroy {
  today = new Date();
  priorityValues = PriorityValues;
  typeOptions: string[];

  private subscriptions: Array<Subscription> = [];

  constructor(private createService: CreateTicketService) { }

  ngOnInit() {
    this.typeOptions = ["TODO", "TODO #2"];
  }

  onSave(ticket: CreateTicket): void {
    this.subscriptions.push(this.createService.add(ticket).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
