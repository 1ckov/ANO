import { Injectable } from '@angular/core';
import {Faculty} from "./faculty";

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
export class FacultyService {
  private facs: Faculty[] = [
    {name:'Software engineering', shortel:'I', building:'A'},
    {name:'Telecommunications engineering', shortel:'N', building:'S'},
    {name:'Electrical engineering', shortel:'E', building:'B'},
  ];

  constructor() { }
  getFacultys(searchCriteria?: Partial<Faculty>):Faculty[]{
    let result: Faculty[] = this.facs;
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
  getFaculty(shortel:string) : Faculty | undefined{
    for (const prof of this.facs){
      if(prof.shortel === shortel){
        return prof;
      }
    }
    return undefined
  }
  create(faculty:Faculty):Faculty{
    this.facs.push(faculty)
    return faculty
  }
  update(faculty:Partial<Faculty>):Faculty | undefined {
    // for ( const variable of objects array) -> variable matches objective type
    // for ( const variable in array) -> variable was string ???
    for(const fac of this.facs){
      if (fac.shortel === faculty.shortel){
        if(faculty.name) fac.name = faculty.name
        if(faculty.building) fac.building = faculty.building
        if(faculty.shortel) fac.shortel = faculty.shortel
        return fac;
      }
    }
    return undefined
  }
  delete(facultyToDelete:Faculty):void{
    this.facs = this.facs.filter(
      (element:Faculty) => element.shortel !== facultyToDelete.shortel
    )
  }
}
