import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchCriteria} from "../../models/search-criteria";
import {Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  @Output() onSubmitEvent: EventEmitter<SearchCriteria> = new EventEmitter();

  cities: string[] = ['Colombo', 'Sigiriya', 'Waskaduwa', 'Hikkaduwa'];
  searchCriteria: FormGroup;
  filteredCities = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.searchCriteria = this.formBuilder.group(
      {
        keyWord: [''],
        checkInDate: []
      }
    );

    this.searchCriteria.controls['keyWord'].valueChanges.subscribe(d => {
      this.filteredCities = this.filterCities(d);
    });
  }

  onSubmit({value, valid}: { value: SearchCriteria, valid: boolean }) {
    console.log(value, valid);
    this.onSubmitEvent.emit(value);
    this.router.navigate(['hotels/' + value.keyWord]);
  }

  filterCities(name: string) {
    return this.cities.filter(city =>
      city.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}
