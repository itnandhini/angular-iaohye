import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  form: FormGroup;
  ACCEPTABILITY = Acceptability;
  testArray = [];
  stopEvent = true;
  constructor(private fb: FormBuilder) {}

  users: Array<any> = [
    {
      id: 1,
      ffid: 0,
      name: "Sunday",
      active: false
    },
    {
      id: 2,
      name: "Monday",
      active: false
    },
    {
      id: 3,
      name: "Tuesday",
      active: false
    },
    {
      id: 4,
      name: "Wednesday",
      active: false
    },
    {
      id: 5,
      name: "Thusday",
      active: false
    },
    {
      id: 6,
      name: "Friday",
      active: false
    },
    {
      id: 7,
      name: "Saturday",
      active: false
    }
  ];
  ngOnInit() {
    // build the form
    this.form = this.fb.group({
      days: this.fb.array([])
    });
  }

  get days(): FormArray {
    return this.form.get("days") as FormArray;
  }
  get dayArray(): FormArray {
    return this.form.get("dayArray") as FormArray;
  }
  addCondition() {
    this.days.push(
      this.fb.group({
        days: ["", Validators.required],
        dayArray: this.fb.array([])
      })
    );
    console.log("conditions", this.days);
  }
  clickMe(value) {
    console.log(value);
    this.testArray = [];
    switch (value) {
      case "All":
        console.log("All");
        this.stopEvent = true;
        break;
      case "Five":
        console.log("five");
        this.stopEvent = true;
        break;
      case "Two":
        this.testArray = [1, 7];

        console.log("two");
        this.stopEvent = true;
        break;
      case "Any":
        console.log("any");
        this.stopEvent = !this.stopEvent;
        break;
    }
  }
  click(user, id) {
    if (this.testArray.indexOf(user.name) !== -1) {
      var index = this.testArray.indexOf(user.name);
      this.testArray.splice(index, 1);
      alert(this.testArray);
    } else {
  
      this.testArray.push(user.name);
      alert(this.testArray);
    }
    user.active = !user.active;
    // your code here....
  }
}
export enum Acceptability {
  ALL,
  FIVE,
  TWO,
  ANY
}

export interface Condition {
  days: Acceptability;
}
