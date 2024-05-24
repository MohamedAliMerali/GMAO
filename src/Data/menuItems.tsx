import { ReactNode } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import TasksList from "../components/Menu/Pages/TasksList";
import MaintenancePlans from "../components/Menu/Pages/MaintenancePlans";
import MachinesStates from "../components/Menu/Pages/MachinesStates";
import MachineDocuments from "../components/Menu/Pages/MachineDocuments";
import PiecesStore from "../components/Menu/Pages/PiecesStore";
import Dashboard from "../components/Menu/Pages/Dashboard";
import { User } from "./users";

// Define the type for the menu items
interface MenuItem {
  item: string;
  icon: ReactNode;
  component: (user: User) => React.ReactNode;
}

// Create and export the menu array
export const menuItems: MenuItem[] = [
  {
    item: "Liste des taches",
    icon: <MdOutlineTaskAlt />,
    component: (user) => <TasksList user={user} />,
  },
  {
    item: "Plans de maintenance",
    icon: <MdOutlineTaskAlt />,
    component: (user) => <MaintenancePlans user={user} />,
  },
  {
    item: "Etat des machines",
    icon: <MdOutlineTaskAlt />,
    component: (user) => <MachinesStates user={user} />,
  },
  {
    item: "Documents machines",
    icon: <MdOutlineTaskAlt />,
    component: (user) => <MachineDocuments user={user} />,
  },
  {
    item: "Magasin des piece",
    icon: <MdOutlineTaskAlt />,
    component: (user) => <PiecesStore user={user} />,
  },
  {
    item: "Reporting & Dashboard",
    icon: <MdOutlineTaskAlt />,
    component: (user) => <Dashboard user={user} />,
  },
];
