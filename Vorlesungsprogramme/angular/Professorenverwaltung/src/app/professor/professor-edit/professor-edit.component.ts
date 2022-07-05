import {Component, OnInit, ViewChild} from '@angular/core';
import {Professor} from "../professor";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {ProfessorService} from "../professor.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.css']
})
export class ProfessorEditComponent implements OnInit {
  professor:Professor = new Professor('','','','')
  updatesSaved: boolean = false;
  @ViewChild('professoredit') professoredit: NgForm|undefined;
  constructor(private router:Router,private route: ActivatedRoute,private professorService:ProfessorService) { }

  ngOnInit(): void {
    let prof:Professor|undefined;
    const routeSnapshot:ActivatedRouteSnapshot = this.route.snapshot;
    const shortel:string | null = routeSnapshot.params['shortel']

    if(shortel){
      prof = this.professorService.getProfessor(shortel)
    }

    if(prof){
      this.professor = JSON.parse(JSON.stringify(prof));
    }else{
      this.router.navigate(['../..'],{relativeTo:this.route})
    }
  }
  update(professor:Professor):void{
    this.professorService.update(professor);
    this.updatesSaved = true
    this.router.navigate(['../..'], {relativeTo:this.route})
  }

  hasUnsavedChanges(): boolean{
    if (!this.updatesSaved && this.professoredit?.dirty) {
// Unsaved Changes
      return true;
    } else {
      return false;
    }
  }
}
