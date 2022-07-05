import { Injectable } from '@angular/core';
import {Professor} from "./professor";

@Injectable({
  providedIn: 'root'
})
/**
 * Services:
 * - are meant to separate the component from the data stored within
 * - request data from backend or external sources
 * - allow easy mocking of datasets and later adding real database connectivity
 * - singleton
 * - gets instantiated automatically by angular
 */
export class ProfessorService {
  private profs: Professor[] = [
    {fname:'Thomas',lname:'Specht', shortel:'SPE', room:'A105b',faculty:'I'},
    {fname:'Thomas',lname:'Smits', shortel:'SMI', room:'A104a',faculty:'I'},
    {fname:'Thomas',lname:'Ihme', shortel:'IHM', room:'A005b',faculty:'I'},
    {fname:'Martin',lname:'Damm', shortel:'DAM', room:'S215',faculty:'N'},
  ];

  constructor() { }
  getProfessors(searchCriteria?: Partial<Professor>):Professor[]{
    let result: Professor[] = this.profs;
    if(searchCriteria) {
      //Make searchCriteria into a assoc array using
      let searchCriteriaAssoc: { [key: string]: any } = searchCriteria
      let searchCriteriaAssocWithValue: { [key: string]: any } = {};
      for (let searchAttr in searchCriteriaAssoc) {
        if (searchCriteriaAssoc[searchAttr]) {
          searchCriteriaAssocWithValue[searchAttr] = searchCriteriaAssoc[searchAttr]
        }
      }
      for (let searchAttr in searchCriteriaAssocWithValue) {
        result = result.filter(
          (prof: { [key: string]: any }): boolean => {
            return prof[searchAttr] === searchCriteriaAssocWithValue[searchAttr]
          }
        )
      }
    }
    return result;
  }
  getProfessor(shortel:string) : Professor | undefined{
    for (const prof of this.profs){
      if(prof.shortel === shortel){
        return prof;
      }
    }
    return undefined
  }
  create(professor:Professor):Professor{
    this.profs.push(professor)
    return professor
  }
  update(professor:Partial<Professor>):Professor | undefined {
    // for ( const variable of objects array) -> variable matches objective type
    // for ( const variable in array) -> variable was string ???
    for(const prof of this.profs){
      if (prof.shortel === professor.shortel){
        if(professor.fname) prof.fname = professor.fname
        if(professor.lname) prof.lname = professor.lname
        if(professor.room) prof.room = professor.room
        if(professor.faculty) prof.faculty = professor.faculty
        if(professor.shortel) prof.shortel = professor.shortel
        return prof;
      }
    }
    return undefined
  }
  delete(professorToDelete:Professor):void{
    this.profs = this.profs.filter(
      (element:Professor) => element.shortel !== professorToDelete.shortel
    )
  }
}
