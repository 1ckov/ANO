/**
 * Domain class Professor:
 * - No Logic
 * - Only data model definitions
 */
export class Professor {
  constructor(
    public fname:string,
    public lname:string,
    public shortel: string,
    public faculty:string,
    public room?:string,
  ) {
  }
}
