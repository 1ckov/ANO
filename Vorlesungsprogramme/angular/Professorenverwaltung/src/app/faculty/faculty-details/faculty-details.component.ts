import {Component, Input, OnInit} from '@angular/core';
import {Faculty} from "../faculty";

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

  @Input() faculty: Faculty|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
