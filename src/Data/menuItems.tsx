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
import { Task } from "./Tasks";

export interface History {
  machineName: string;
  TBF: number;
  breakDuration_: number;
  DISPHist: number[];
}

interface ComponentProps {
  user: User;
  history: History[];
  setHistory: (history: History[]) => void;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
}
// Define the type for the menu items
interface MenuItem {
  item: string;
  icon: ReactNode;
  component: (componentProps: ComponentProps) => React.ReactNode;
}

// Create and export the menu array
export const menuItems: MenuItem[] = [
  {
    item: "Liste des taches",
    icon: <SiGoogletasks size={18} />,
    // todo: reformate this
    component: ({ user, tasks, setTasks }) => (
      <TasksList user={user} tasks={tasks} setTasks={setTasks} />
    ),
  },
  {
    item: "Plans de maintenance",
    icon: <FaCalendarPlus size={18} />,
    // todo: reformate this
    component: ({ user, tasks, setTasks }) => (
      <MaintenancePlans user={user} tasks={tasks} setTasks={setTasks} />
    ),
  },
  {
    item: "Etat des machines",
    icon: <IoIosSpeedometer size={18} />,
    component: ({ history, setHistory }) => (
      <MachinesStates history={history} setHistory={setHistory} />
    ),
  },
  {
    item: "Documents machines",
    icon: <IoDocuments size={18} />,
    component: () => <MachineDocuments />,
  },
  {
    item: "Magasin des piece",
    icon: <FaScrewdriverWrench size={18} />,
    component: ({ user }) => <PiecesStore user={user} />,
  },
  {
    item: "Reporting & Dashboard",
    icon: <BsFillMotherboardFill size={18} />,
    component: ({ history }) => <Dashboard history={history} />,
  },
];
