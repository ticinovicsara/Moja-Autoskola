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
    label: "Kalendar",
    to: routes.INSTRUCTOR_CALENDAR,
    roles: [UserRoles.Instructor],
  },
  {
    label: "Unesi slobodne termine",
    to: routes.INSTRUCTOR_CALENDAR,
    roles: [UserRoles.Instructor],
  },

  {
    label: "Lista kandidata",
    to: routes.INSTRUCTOR_CANDIDATE_LIST,
    roles: [UserRoles.Instructor],
  },
  {
    label: "Dodijeli instruktore",
    to: routes.SCHOOL_ADMIN_ASSIGN_INSTRUCTOR,
    roles: [UserRoles.Admin, UserRoles.SchoolAdmin],
  },
  {
    label: "Odobri zahtjeve",
    to: routes.PENDING_LIST,
    roles: [UserRoles.Admin, UserRoles.SchoolAdmin],
  },
  {
    label: "Postavke profila",
    to: routes.HOME, //treba dodat profile settings page
    roles: [
      UserRoles.Candidate,
      UserRoles.Instructor,
      UserRoles.Admin,
      UserRoles.SchoolAdmin,
    ],
  },
];
