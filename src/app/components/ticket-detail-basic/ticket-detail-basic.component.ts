import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TicketDetail } from '../../entities/read/ticketDetail';
import { FormControl, Validators } from '@angular/forms';
import { IOption } from '../../configuration/ioption';
import { PriorityValues } from '../../configuration/priorityConstants';
import { StatusValues } from '../../configuration/statusConstants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,  
  selector: 'ticket-detail-basic',
  templateUrl: './ticket-detail-basic.component.html',
  styleUrls: ['./ticket-detail-basic.component.css']
})
export class TicketDetailBasicComponent implements OnInit {
  @Input() ticket: TicketDetail;
  @Output() priorityUpdated = new EventEmitter();
  @Output() statusUpdated = new EventEmitter();

  typeOptions: Array<IOption>;
  priorityOptions: Array<IOption>;
  statusOptions: Array<IOption>;

  statusControl: FormControl;
  priorityControl: FormControl;
  typeControl: FormControl;
  descriptionControl: FormControl;
  
  ngOnInit(): void {
    this.priorityOptions = Object.keys(PriorityValues).map(key => PriorityValues[key]);
    this.statusOptions = Object.keys(StatusValues).map(key => StatusValues[key]);
    this.typeOptions = [{ id: 'AAAA', title: 'TODO1' }, { id: 'BBBB', title: 'TODO2' }]       // TODO TypeOptions

    this.statusControl = new FormControl(this.ticket.status.id);
    this.priorityControl = new FormControl(this.ticket.priority.id);
    this.typeControl = new FormControl('');      // TODO Type
    this.descriptionControl = new FormControl(this.ticket.description, Validators.required);

    this.priorityControl.valueChanges.subscribe(val => {
      this.priorityUpdated.emit(val);
    });

    this.statusControl.valueChanges.subscribe(val => {
      this.statusUpdated.emit(val);
    });
  }

  constructor() { 

  }
}
