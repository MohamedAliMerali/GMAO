import saidal from "../../assets/saidal.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { User } from "../../Data/users";

interface Props {
  user: User;
}
const Bar = ({ user }: Props) => {
  return (
    <div className="py-2 px-6 flex flex-row justify-between items-center">
      <img src={saidal} alt="saidal logo" className="w-36" />
      <div className="hover:cursor-pointer" onClick={() => {}}>
        <GiHamburgerMenu className="w-12 h-12" />
        {/* // Todo: fix this  */}
        {/* <div className="relative shadow-xl">
          <ul className="list-group">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Type: {user.type}</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Bar;
