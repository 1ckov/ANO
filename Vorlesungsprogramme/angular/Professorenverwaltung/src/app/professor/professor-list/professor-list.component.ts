import { Component, OnInit } from '@angular/core';
import { Professor } from "../professor";
import { ProfessorService} from "../professor.service";

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professors:Professor[]=[];
  selectedProfessor : Professor|undefined;

  // 1. Dependency injection: We define what classes are needed, for Professor List Component to work, in constructor.
  // 2. Angular sees them and pre loads them
  // 3. Then runs ngOnInit() because before that professors is empty
  constructor(private professorService:ProfessorService) {
    // No logic here preferably, logic should be in ngOnInit method
  }

  ngOnInit(): void {
    // Components should not do a buisness logic, that should happen in services
    this.getProfessors();
  }
  getProfessors():void{
    this.professors = this.professorService.getProfessors();
  }


  /**
   * Saves which professor got clicked
   * @param prof - prof that got clicked
   * @param event - the mouse click event
   */
  selectProfessor(prof:Professor, event:MouseEvent):void {
    // in case of delete button getting pressed
    if((event.target as HTMLElement).tagName?.toLowerCase() !== "button"){
      this.selectedProfessor = prof;
    }
  }
  /**
   * This delete method calls the ProfessorService delete method, and stops the propagation of the event.
   * @param professor - professor to be deleted
   * @param event - the delete event that gets passed
   */
  delete(professor:Professor,event:Event):void{
    if(this.selectedProfessor && professor == this.selectedProfessor){
      this.selectedProfessor = undefined
    }
    this.professorService.delete(professor);
    this.getProfessors();
    event.stopPropagation(); // so that the deleted line doesnt get selected
  }

}
