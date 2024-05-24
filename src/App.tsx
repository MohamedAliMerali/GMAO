import { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import "./App.css";
import LogIn from "./components/LogIn";
import Menu from "./components/Menu";
import { menuItems } from "./Data/menuItems";
import { User } from "./Data/users";

function App() {
  const [logged, setLogged] = useState(true);
  const [user, setUser] = useState<User>({} as User);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="flex">
      {logged ? null : <LogIn setLogged={setLogged} setUser={setUser}></LogIn>}
      <div className="md:min-h-screen w-full max-w-md bg-stone-600 ">
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
                <span className="m-2">{icon}</span>
                {item}
              </div>
              <span className="m-2">
                <VscTriangleRight />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-300 w-full px-16 pt-20 overflow-scroll">
        {selectedItem >= 0 ? (
          <Menu user={user} itemNum={selectedItem} />
        ) : (
          <div>WELCOME HEHE</div>
        )}
      </div>
    </div>
  );
}

export default App;
