import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreateTicket } from '../../entities/write/createTicket';
import { CreateTicketService } from './create-ticket.service';
import { PriorityValues } from '../../configuration/constants';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit, OnDestroy {
  today = new Date();
  model = new CreateTicket();
  priorityValues = PriorityValues;

  private subscriptions: Array<Subscription> = [];

  constructor(private createService: CreateTicketService) { }

  ngOnInit() {
    debugger;
  }

  onSave(): void {
    this.subscriptions.push(this.createService.add(this.model).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
