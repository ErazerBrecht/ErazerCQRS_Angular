import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'form-group-markdown',
  templateUrl: './form-group-markdown.component.html',
  styleUrls: ['./form-group-markdown.component.css']
})
export class FormGroupMarkdownComponent implements AfterViewInit {
  @Input() label: string
  @Input() control: FormControl
  @Input() previewMode: boolean;
  @ViewChild('simplemde') textarea: ElementRef
  private simplemde: SimpleMDE;

  constructor() { }

  ngAfterViewInit() {
    this.simplemde = new SimpleMDE({ element: this.textarea.nativeElement, spellChecker: false });

    if (this.previewMode) {
      this.simplemde.togglePreview();
    }

    this.simplemde.codemirror.on('change', () => {
      this.control.patchValue(this.simplemde.value());
    })
  }


}
