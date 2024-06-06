import { useState } from "react";
import { User } from "../../Data/users";
import saidal from "../../assets/saidal.png";
import { GiHamburgerMenu } from "react-icons/gi";
import userAvatar from "../../assets/profileAvatar.jpg";

interface Props {
  user: User;
  userId: number;
  logOut: () => void;
}
const Bar = ({ user, userId, logOut }: Props) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  return (
    <div className="py-2 px-6 flex flex-row justify-between items-center">
      <img src={saidal} alt="saidal logo" className="w-36" />
      <div className="hover:cursor-pointer">
        <div
          onClick={() => {
            console.log(">> showUserInfo:", showUserInfo);
            setShowUserInfo(!showUserInfo);
          }}
        >
          <GiHamburgerMenu className="w-12 h-12" />
        </div>
        {/* // Todo: fix this  */}
      </div>
      <div
        // todo: change this to have a transition
        className={
          "shadow-xl m-4 fixed z-10 right-10 top-10 overflow-x-hidden " +
          (showUserInfo ? "w-auto" : "w-0")
        }
      >
        <ul className="list-group">
          <li className="list-group-item">
            <img
              // ? change this to the path you find in the deployment code
              // just to test
              src={userAvatar}
              alt="profile Avatar"
              className="w-24 rounded-full mx-auto"
            />
          </li>
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Type: {user.type}</li>
          <li className="list-group-item">
            Authorizations:np
            <ul className="list-group">
              {user.authorizations.map((auth, index) => (
                <li key={index} className="list-group-item mr-1">
                  - {auth}
                </li>
              ))}
            </ul>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-outline-danger float-right"
              onClick={() => logOut()}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bar;
