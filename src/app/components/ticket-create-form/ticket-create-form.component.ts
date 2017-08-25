import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CreateTicket } from '../../entities/write/createTicket';
import { LOCALE } from '../../configuration/config'
import * as moment from 'moment';

@Component({
  selector: 'ticket-create-form',
  templateUrl: './ticket-create-form.component.html',
  styleUrls: ['./ticket-create-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketCreateFormComponent implements OnInit {
  @Input() typeOptions: string;
  @Output() onSave = new EventEmitter<CreateTicket>();
  ticketCreateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ticketCreateForm = this.formBuilder.group({
      creator: [{ value: 'Brecht Carlier', disabled: true }],
      date: [{value: moment().locale(LOCALE).format('L'), disabled: true}],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit()
  {
    const formValues = this.ticketCreateForm.getRawValue();
    this.onSave.emit(new CreateTicket(formValues.title, formValues.description, formValues.priority));
  }

}
