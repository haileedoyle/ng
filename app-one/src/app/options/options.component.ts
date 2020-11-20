import { Component, OnInit } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  option: Option = {
    id: 1,
    name: 'About Us'
  }

    constructor() { }

    ngOnInit() {
    } 

}
