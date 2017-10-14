import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PriorityValues } from '../../configuration/constants';
import { IOption } from '../../configuration/ioption';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {
  typeOptions: Array<IOption>;
  priorityOptions: Array<IOption>;
  statusOptions: Array<IOption>;

  statusControl: FormControl;
  priorityControl: FormControl;
  typeControl: FormControl;
  descriptionControl: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.priorityOptions = Object.keys(PriorityValues).map(key => PriorityValues[key]);
    this.statusOptions = Object.keys(PriorityValues).map(key => PriorityValues[key]);     // TODO StatusOptions
    this.typeOptions = [{ id: 'AAAA', title: 'TODO1' }, { id: 'BBBB', title: 'TODO2' }]       // TODO TypeOptions

    // TODO Retrieve ticket 
    this.statusControl = new FormControl('646be77c-bc46-429f-a3ab-ae19516dcb6a');
    this.priorityControl = new FormControl('7d4b4b49-323b-45e8-9f1a-23ce7592f9f3');
    this.typeControl = new FormControl('BBBB');

    this.descriptionControl = new FormControl('#This is the description', Validators.required);
  }

  handleCommentAdded(comment: string) {
    alert(comment);
  }
}
