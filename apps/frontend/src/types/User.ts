export interface User {
  firstName: string;
  lastName: string;
  role?: UserRoles;
  phone: string;
}

export enum UserRoles {
  Admin = "Admin",
  SchoolAdmin = "SchoolAdmin",
  Candidate = "Candidate",
  Instructor = "Instructor",
  Guest = "Guest",
}
