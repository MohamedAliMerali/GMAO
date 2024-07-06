import { useEffect, useState } from "react";
import { User } from "../../Data/users";
import saidal from "../../assets/saidal.png";
import { GiHamburgerMenu } from "react-icons/gi";
import userAvatar from "../../assets/profileAvatar.jpg";

interface Props {
  user: User;
  logOut: () => void;
}
const Bar = ({ user, logOut }: Props) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    const element = document.getElementById("user-info");
    if (element) {
      element.style.width = showUserInfo ? "250px" : "0px";
      // element.style.height = showUserInfo ? "auto" : "0px  ";
    }
  }, [showUserInfo]);

  return (
    <div className="py-2 px-6 flex flex-row justify-between items-center">
      {/* logo */}
      <img src={saidal} alt="saidal logo" className="w-36" />

      {/* Hamburger Menu */}
      <div className="hover:cursor-pointer">
        <div
          onClick={() => {
            console.log(">> Show User Info:", showUserInfo);
            setShowUserInfo(!showUserInfo);
          }}
        >
          <GiHamburgerMenu className="w-12 h-12" />
        </div>
      </div>

      {/* user infos */}
      <div
        id="user-info"
        className="shadow-xl m-4 fixed z-10 right-10 top-10 transition-all duration-700 overflow-hidden"
      >
        <ul id="user-info" className="list-group">
          <li className="list-group-item overflow-hidden">
            <img
              // ? change this to the path you find in the deployment code
              // just to test
              src={userAvatar}
              alt="profile Avatar"
              className="h-24 w-24 rounded-full mx-auto"
            />
          </li>
          <li className="list-group-item text-nowrap overflow-hidden">
            Name: {user.name}
          </li>
          <li className="list-group-item text-nowrap overflow-hidden">
            Type: {user.type}
          </li>
          <li className="list-group-item text-nowrap overflow-hidden">
            Authorizations:
            <ul className="list-group">
              {user.authorizations.length === 0 ? (
                <li className="ml-4">None</li>
              ) : (
                user.authorizations.map((auth, index) => (
                  <li
                    key={index}
                    className="list-group-item text-nowrap overflow-hidden mr-1"
                  >
                    - {auth}
                  </li>
                ))
              )}
            </ul>
          </li>
          <li className="list-group-item text-nowrap overflow-hidden">
            <button
              className="btn btn-outline-danger float-right text-nowrap overflow-hidden"
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
