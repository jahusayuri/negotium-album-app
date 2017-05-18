import { Component, OnInit } from '@angular/core';
import { List } from './list.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todolist: List[] = [
    new List('Clean Mother Nature by picking up garbage one at a time.','Global Cleansing'),
    new List('Plant trees.','Global Renewal')
  
  ];
  constructor() { }
  ngOnInit() {
  }

}
