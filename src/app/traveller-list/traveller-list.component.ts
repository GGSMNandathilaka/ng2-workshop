import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Traveller } from '../../models/traveller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-traveller-list',
  templateUrl: './traveller-list.component.html',
  styleUrls: ['./traveller-list.component.css']
})
export class TravellerListComponent implements OnInit {
  hotelId;
  travellers: Traveller[] = [];
  addTravellersForm: FormGroup;
  titles = ['Mr', 'Mrs', 'Miss'];
  types = ['Adult', 'Child', 'Infant'];

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.hotelId = params['id'];
      this.dataService.getTravellers(this.hotelId).subscribe(data => {
        this.travellers = data;
      });
    });
    this.initForm();
    // this.dataService.travellers.asObservable().subscribe(result => {
    //   console.log('added');
    // });
  }

  initForm() {
    this.addTravellersForm = this.formBuilder.group({
      title: '',
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      type: '',
      gender: '',
      age: ['', Validators.required],
    });
  }

  onSubmit() {
    let traveller = new Traveller();
    traveller = this.addTravellersForm.value;
    traveller.id = this.travellers.length + 1;
    console.log(traveller);
    this.dataService.addTravellers(traveller, this.hotelId);
    this.addTravellersForm.reset();

  }

}
