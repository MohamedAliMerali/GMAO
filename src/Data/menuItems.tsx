import { ReactNode } from "react";
import TasksList from "../components/Menu/Pages/TasksList";
import MaintenancePlans from "../components/Menu/Pages/MaintenancePlans";
import MachinesStates from "../components/Menu/Pages/MachinesStates";
import MachineDocuments from "../components/Menu/Pages/MachineDocuments";
import PiecesStore from "../components/Menu/Pages/PiecesStore";
import Dashboard from "../components/Menu/Pages/Dashboard";
import { User } from "./users";
// import { MdOutlineTaskAlt } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { FaCalendarPlus } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { BsFillMotherboardFill } from "react-icons/bs";

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
    icon: <SiGoogletasks />,
    component: (user) => <TasksList user={user} />,
  },
  {
    item: "Plans de maintenance",
    icon: <FaCalendarPlus />,
    component: (user) => <MaintenancePlans user={user} />,
  },
  {
    item: "Etat des machines",
    icon: <IoIosSpeedometer />,
    component: (user) => <MachinesStates user={user} />,
  },
  {
    item: "Documents machines",
    icon: <IoDocuments />,
    component: (user) => <MachineDocuments user={user} />,
  },
  {
    item: "Magasin des piece",
    icon: <FaScrewdriverWrench />,
    component: (user) => <PiecesStore user={user} />,
  },
  {
    item: "Reporting & Dashboard",
    icon: <BsFillMotherboardFill />,
    component: (user) => <Dashboard user={user} />,
  },
];
