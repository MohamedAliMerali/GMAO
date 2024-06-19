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
  const [logged, setLogged] = useState(true);
  const [user, setUser] = useState<User>(users[0]);
  const [, setUserId] = useState(0);
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
      <div className="flex flex-col flex-1 min-[840px]:flex-row">
        {/* menu */}
        <div className="min-[1050px]:w-full max-w-lg bg-stone-600 max-[840px]:max-w-full">
          <ul className="pt-8 text-white max-[840px]:flex justify-evenly flex-wrap">
            {menuItems.map(({ item, icon }, num) => (
              <li
                id={num.toString()}
                key={num}
                className={
                  "hover:cursor-pointer hover:bg-slate-400 py-6 px-10 flex flex-row justify-between " +
                  (selectedItem === num ? "bg-slate-400" : "")
                }
                onClick={() => setSelectedItem(num)}
              >
                <div className="flex flex-row items-center">
                  <span className="min-[1001px]:mr-4 ">{icon}</span>
                  <span className="max-[1000px]:hidden">{item}</span>
                </div>
                <span className="m-2 max-[1050px]:hidden">
                  <VscTriangleRight />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* selected page */}
        <div className="bg-gray-300 w-full px-16 py-20 h-full overflow-y-scroll">
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
