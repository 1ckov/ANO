import { Component, OnInit } from '@angular/core';
import {Faculty} from "../faculty";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {FacultyService} from "../faculty.service";

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
  faculty:Faculty = new Faculty('','','')
  constructor(private router:Router,private route: ActivatedRoute,private facultyService:FacultyService) { }

  ngOnInit(): void {
    let fac:Faculty|undefined;
    const routeSnapshot:ActivatedRouteSnapshot = this.route.snapshot;
    const shortel:string | null = routeSnapshot.params['shortel']

    if(shortel){
      fac = this.facultyService.getFaculty(shortel)
    }

    if(fac){
      this.faculty = JSON.parse(JSON.stringify(fac));
    }else{
      this.router.navigate(['../..'],{relativeTo:this.route})
    }
  }
  update(fac:Faculty):void{
    this.facultyService.update(fac);
    this.router.navigate(['../..'], {relativeTo:this.route})
  }

}
