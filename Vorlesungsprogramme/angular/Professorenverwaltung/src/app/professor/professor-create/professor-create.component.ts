import {Component, OnInit, ViewChild} from '@angular/core';
import {Professor} from "../professor";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfessorService} from "../professor.service";
import {SaveChangesInterface} from "../../save-changes/save-changes-interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit, SaveChangesInterface {
  professor:Professor = new Professor('','','','')

  updatesSaved:boolean=false
  @ViewChild('professorcreate') professorcreate:NgForm |undefined

  constructor(private router:Router,private route: ActivatedRoute,private professorService:ProfessorService) { }

  ngOnInit(): void {
  }

  save(professor:Professor):void{
    this.professorService.create(professor);
    this.updatesSaved = true;
    this.router.navigate(['..'],{relativeTo:this.route})
  }
  hasUnsavedChanges(): boolean {
    if(!this.updatesSaved && this.professorcreate?.dirty){
      return true;
    }else {
      return false;
    }
  }
}
