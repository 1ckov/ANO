import { Component, OnInit } from '@angular/core';
import { Faculty } from "../faculty";
import { FacultyService} from "../faculty.service";

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {
  facultys:Faculty[]=[];
  selectedFaculty : Faculty|undefined;

  // 1. Dependency injection: We define what classes are needed, for faculty List Component to work, in constructor.
  // 2. Angular sees them and pre loads them
  // 3. Then runs ngOnInit() because before that facultys is empty
  constructor(private facultyService:FacultyService) {
    // No logic here preferably, logic should be in ngOnInit method
  }

  ngOnInit(): void {
    // Components should not do a buisness logic, that should happen in services
    this.getFacultys();
  }
  getFacultys():void{
    this.facultys = this.facultyService.getFacultys();
  }


  /**
   * Saves which faculty got clicked
   * @param fac - prof that got clicked
   * @param event - the mouse click event
   */
  selectFaculty(fac:Faculty, event:MouseEvent):void {
    // in case of delete button getting pressed
    if((event.target as HTMLElement).tagName?.toLowerCase() !== "button"){
      this.selectedFaculty = fac;
    }
  }
  /**
   * This delete method calls the facultyService delete method, and stops the propagation of the event.
   * @param faculty - faculty to be deleted
   * @param event - the delete event that gets passed
   */
  delete(faculty:Faculty,event:Event):void{
    if(this.selectedFaculty && faculty == this.selectedFaculty){
      this.selectedFaculty = undefined
    }
    this.facultyService.delete(faculty);
    this.getFacultys();
    event.stopPropagation(); // so that the deleted line doesnt get selected
  }

}
