import { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import "./App.css";
import LogIn from "./components/LogIn";
import Bar from "./components/Bar";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import { menuItems } from "./Data/menuItems";
import users, { User } from "./Data/users";

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<User>(users[0]);
  const [, setUserId] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(-1);

  const logOut = () => {
    setUser({} as User);
    setLogged(false);
    setSelectedItem(-1);
  };

  if (!logged)
    return (
      <LogIn setLogged={setLogged} setUser={setUser} setUserId={setUserId} />
    );

  return (
    <div className="flex flex-col h-screen">
      <Bar user={user} logOut={logOut} />
      <div className="flex flex-1">
        {/* menu */}
        <div className="w-full max-w-sm bg-stone-600 md:max-w-md lg:max-w-xl">
          <ul className="pt-8 text-white">
            {menuItems.map(({ item, icon }, num) => (
              <li
                id={num.toString()}
                key={num}
                className={
                  "hover:cursor-pointer hover:bg-slate-400 w-full py-6 px-10 flex flex-row justify-between " +
                  (selectedItem === num ? "bg-slate-400" : "")
                }
                onClick={() => setSelectedItem(num)}
              >
                <div className="flex flex-row">
                  <span className="m-2 hidden md:block">{icon}</span>
                  {item}
                </div>
                <span className="m-2 hidden sm:block">
                  <VscTriangleRight />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* selected page */}
        <div className="bg-gray-300 w-full px-16 pt-20 h-full overflow-y-scroll">
          {selectedItem >= 0 ? (
            <Menu user={user} itemNum={selectedItem} />
          ) : (
            <Welcome />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
