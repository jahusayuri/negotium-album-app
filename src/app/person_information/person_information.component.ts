import { Component, OnInit } from '@angular/core';
import { Information } from './person_information.model';
@Component({
  selector: 'app-person-information',
  templateUrl: './person_information.component.html',
  styleUrls: ['./person_information.component.css']
})
export class PersonInformationComponent implements OnInit {
  information: Information[] = [
    new Information('Joshua', 'Requioma', 'Canduman'),
    new Information('Eurika', 'Fajardo', 'Consolacion'),
    new Information('Jerome', 'Villahermosa', 'Banilad'),
    new Information('Enrico', 'Requioma', 'Canduman'),
 
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
