import { menuItems } from "../../Data/menuItems";
import { User } from "../../Data/users";

// Props and component
interface Props {
  user: User;
  itemNum: number;
}

const Menu = ({ user, itemNum }: Props) => {
  return menuItems[itemNum].component(user);
};

export default Menu;
