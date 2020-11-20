import { Component, OnInit } from '@angular/core';
import { Option } from './option';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
 option = [
    { id: 1, name: 'Home'},
    { id: 2, name: 'Offerings'},
    { id: 3, name: 'Us'},
    { id: 4, name: 'Contact'}
  ]

    constructor() { }

    ngOnInit() {
    } 

}
