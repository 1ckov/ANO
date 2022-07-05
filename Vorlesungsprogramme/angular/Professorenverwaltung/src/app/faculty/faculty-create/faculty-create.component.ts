import { Component, OnInit } from '@angular/core';
import {Faculty} from "../faculty";
import {ActivatedRoute, Router} from "@angular/router";
import {FacultyService} from "../faculty.service";

@Component({
  selector: 'app-faculty-create',
  templateUrl: './faculty-create.component.html',
  styleUrls: ['./faculty-create.component.css']
})
export class FacultyCreateComponent implements OnInit {
  faculty:Faculty = new Faculty('','','')
  constructor(private router:Router,private route: ActivatedRoute,private facultyService:FacultyService) { }

  ngOnInit(): void {
  }

  save(faculty:Faculty):void{
    this.facultyService.create(faculty);
    this.router.navigate(['..'],{relativeTo:this.route})
  }
}
