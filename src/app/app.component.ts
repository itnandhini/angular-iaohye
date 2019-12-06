import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  form: FormGroup;
  ACCEPTABILITY = Acceptability;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // build the form
    this.form = this.fb.group({
      days: this.fb.array([])
    });

  }

  get days(): FormArray {
    return this.form.get('days') as FormArray;
  }

  addCondition() {
    this.days.push(this.fb.group({
      days: ['', Validators.required]
    }));
    console.log("conditions", this.days)
  }
}
export enum Acceptability {
  ALL,
  FIVE,
  TWO,
  ANY
}

export interface Condition {
  title: string;
  days: Acceptability;
}
