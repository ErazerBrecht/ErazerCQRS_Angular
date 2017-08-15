import { Store } from "@ngrx/store";
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { ITicket } from "../../entities/interfaces/iTicket";
import { AllTicketsService } from './all-tickets.service'
import { State } from "../../redux/state/state";
import { SetAllTickets } from "../../redux/actions/ticket";

@Component({
  selector: 'all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {
  // Data
  tickets$ = this.store.select((state: State) => state.tickets);

  // Placeholder to make it possible to unsubscribe the obsevables
  private subscriptions: Array<Subscription> = [];

  constructor(private service: AllTicketsService, private store: Store<State>) { }

  ngOnInit() {
    this.subscriptions.push(this.service.all().subscribe((tickets: Array<ITicket>) => {
      this.store.dispatch(new SetAllTickets(tickets));
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
