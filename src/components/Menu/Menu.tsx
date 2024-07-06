import { useState } from "react";
import { menuItems } from "../../Data/menuItems";
import tasksLists from "../../Data/Tasks";
import { User } from "../../Data/users";
import machines from "../../Data/machines";
import { NotificationsInterface } from "../../Data/userNotifications";
// import { History } from "../../Data/menuItems";

// Props and component
interface Props {
  user: User;
  notifications: NotificationsInterface;
  setNotifications: (notifications: NotificationsInterface) => void;
  itemNum: number;
}

const getInitialHistory = () => {
  const storedItem = localStorage.getItem("TBFhistory");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    const initialHistory = machines.map((machineItem) => ({
      machineName: machineItem.name,
      TBF: 0,
      breakDuration_: 0,
      DISPHist: [] as number[],
    }));
    localStorage.setItem("TBFhistory", JSON.stringify(initialHistory));
    return initialHistory;
  }
};

const Menu = ({ user, notifications, setNotifications, itemNum }: Props) => {
  const [tasks, setTasks] = useState(tasksLists);
  const [history, setHistory] = useState(() => getInitialHistory());

  return menuItems[itemNum].component({
    user,
    history,
    setHistory,
    tasks,
    setTasks,
    notifications,
    setNotifications,
  });
};

// const Menu = ({ user, itemNum }: Props) => {
//   const [history, setHistory] = useState(
//     machines.map((machineItem) => ({
//       machineName: machineItem.name,
//       TBF: 0,
//       breakDuration_: 0,
//       DISPHist: [] as number[],
//     }))
//   );

//   useEffect(() => {
//     const storedItem = localStorage.getItem("TBFhistory");
//     if (storedItem) {
//       setHistory(JSON.parse(storedItem));
//     } else {
//       localStorage.setItem("TBFhistory", JSON.stringify(history));
//       // setHistory([] as History[]);
//     }
//   }, []);

//   return menuItems[itemNum].component(user, history, setHistory);
// };

export default Menu;
