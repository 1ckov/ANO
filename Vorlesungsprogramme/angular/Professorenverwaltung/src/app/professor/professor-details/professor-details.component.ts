import {Component, Input, OnInit} from '@angular/core';
import {Professor} from "../professor";

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  @Input() professor: Professor|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
