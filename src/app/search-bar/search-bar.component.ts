import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchCriteria} from "../../models/search-criteria";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  @Output() onSubmitEvent: EventEmitter<SearchCriteria> = new EventEmitter();

  searchCriteria: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchCriteria = this.formBuilder.group(
      {
        keyWord:['',Validators.required],
        checkInDate:[]
      }
    );
    this.setDate();
  }

  onSubmit({ value, valid }: { value: SearchCriteria, valid: boolean }) {
    console.log(value, valid);
    this.onSubmitEvent.emit(value);
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.searchCriteria.patchValue({checkInDate: {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }

}
