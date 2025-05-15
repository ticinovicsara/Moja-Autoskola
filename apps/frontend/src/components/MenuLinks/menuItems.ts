// menuItems.ts
import { routes } from "@/constants";
import { UserRoles } from "@/types";

export interface MenuItem {
  label: string;
  to: string;
  roles: UserRoles[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Početna",
    to: routes.HOME,
    roles: [
      UserRoles.Guest,
      UserRoles.Candidate,
      UserRoles.Instructor,
      UserRoles.Admin,
      UserRoles.SchoolAdmin,
    ],
  },
  {
    label: "Kalendar",
    to: routes.CANDIDATE_CALENDAR,
    roles: [UserRoles.Candidate],
  },
  {
    label: "Rezerviraj termin",
    to: routes.CANDIDATE_CALENDAR,
    roles: [UserRoles.Candidate],
  },
  {
    label: "Tvoj napredak",
    to: routes.CANDIDATE_PROGRESS,
    roles: [UserRoles.Candidate],
  },
  {
    label: "Tvoj raspored",
    to: routes.INSTRUCTOR_CALENDAR,
    roles: [UserRoles.Instructor],
  },
  {
    label: "Admin panel",
    to: routes.SCHOOL_ADMIN_DASHBOARD,
    roles: [UserRoles.Admin, UserRoles.SchoolAdmin],
  },
  {
    label: "Upravljanje korisnicima",
    to: routes.SCHOOL_ADMIN_ASSIGN_INSTRUCTOR,
    roles: [UserRoles.Admin, UserRoles.SchoolAdmin],
  },
  {
    label: "Postavke profila",
    to: routes.HOME,
    roles: [
      UserRoles.Candidate,
      UserRoles.Instructor,
      UserRoles.Admin,
      UserRoles.SchoolAdmin,
    ],
  },
];
