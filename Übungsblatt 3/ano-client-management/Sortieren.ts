import Client from "./Client";

/**
 * Buble sort implementation in TypeScript
 * @param toSort - A array consisting of objects who posses the lname attribute.
 * @returns - An ordered array of said objects.
 */
function BubleSort(toSort: Client[]): Client[] | undefined {
  let [...sorted] = toSort;
  if (sorted != undefined && sorted != null) {
    let swaped: boolean = true;
    let n = sorted.length;
    do {
      swaped = false;
      for (let i = 0; i < n - 1; i++) {
        if (sorted[i].lname.localeCompare(sorted[i + 1].lname) == 1) {
          [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
          swaped = true;
        }
      }
      n = n - 1;
    } while (swaped);
  }
  return sorted;
}

/**To define a json arrays with an attribute that other objects may share,
 allows us to define funtions which work on diffrent objects that share one attribute.
 * @param toSort - A array consisting of objects who posses the lname attribute. 
 * @returns - An ordered array of said objects.
 */
function BubleSortGeneric(
  //Var. Name: {AttributeName: Type, OtherAttributeName: Type}
  toSort: { lname: string }[]
): { lname: string }[] | undefined {
  //
  let [...sorted] = toSort as { lname: string }[];
  if (sorted != undefined && sorted != null) {
    let swaped: boolean = true;
    let n: number = sorted.length;
    do {
      swaped = false;
      for (let i = 0; i < n - 1; i++) {
        if (sorted[i].lname.localeCompare(sorted[i + 1].lname) == 1) {
          [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
          swaped = true;
        }
      }
      n = n - 1;
    } while (swaped);
  }
  return sorted;
}

function BubleSortGenericLambda(
  //Var. Name: {AttributeName: Type, OtherAttributeName: Type}
  toSort: { lname: string }[],
  func: (a1: any, a2: any) => boolean
): { lname: string }[] | undefined {
  //
  let [...sorted] = toSort as { lname: string }[];
  if (sorted != undefined && sorted != null) {
    let swaped: boolean = true;
    let n: number = sorted.length;
    do {
      swaped = false;
      for (let i = 0; i < n - 1; i++) {
        if (func(sorted[i + 1], sorted[i])) {
          [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
          swaped = true;
        }
      }
      n = n - 1;
    } while (swaped);
  }
  return sorted;
}

//Full Closure syntax with Static Type definition
/**
 * A function for deciding which object with the attribute lname is ranked lexicographically
 * @param x - A Object that has a lname Attribute
 * @param y - A Object that has a lname Attribute
 * @returns - True, if last name of x lexicographically higher(stands before) then y, else False
 */
let closure: (x: { lname: string }, y: { lname: string }) => boolean = (
  x: { lname: string },
  y: { lname: string }
) => {
  if (x.lname.localeCompare(y.lname) == -1) {
    return true;
  } else {
    return false;
  }
};

//Full Closure syntax with Type Inference
/**
 * A function for deciding which object with the attribute last name is ranked lexicographically higher.
 * @param x - A Object that has a lname Attribute
 * @param y - A Object that has a lname Attribute
 * @returns - True, if last name of x lexicographically higher(stands before) then y, else False.
 */
let closure_lname = (x: { lname: string }, y: { lname: string }) => {
  if (x.lname.localeCompare(y.lname) == -1) {
    return true;
  } else {
    return false;
  }
};
let closure_fname = (x: { fname: string }, y: { fname: string }) => {
  if (x.fname.localeCompare(y.fname) == -1) {
    return true;
  } else {
    return false;
  }
};
export {
  BubleSort,
  BubleSortGeneric,
  BubleSortGenericLambda,
  closure,
  closure_fname,
  closure_lname,
};
