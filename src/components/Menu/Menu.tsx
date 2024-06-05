import { useEffect, useState } from "react";
import { menuItems } from "../../Data/menuItems";
import { User } from "../../Data/users";
import machines from "../../Data/machines";
// import { History } from "../../Data/menuItems";

// Props and component
interface Props {
  user: User;
  itemNum: number;
}

const Menu = ({ user, itemNum }: Props) => {
  const [history, setHistory] = useState(
    machines.map(() => ({ TBF: 0, breakDuration_: 0 }))
  );
  useEffect(() => {
    const storedItem = localStorage.getItem("TBFhistory");
    if (storedItem) {
      setHistory(JSON.parse(storedItem));
    } else {
      localStorage.setItem("TBFhistory", JSON.stringify(history));
      // setHistory([] as History[]);
    }
  }, []);

  return menuItems[itemNum].component(user, history, setHistory);
};

export default Menu;
