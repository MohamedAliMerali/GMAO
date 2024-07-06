import { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import "./App.css";
import LogIn from "./components/LogIn";
import Bar from "./components/Bar";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Notifications from "./components/Notifications";
import { menuItems } from "./Data/menuItems";
import { User } from "./Data/users";
import defaultNotifications, {
  // NotifContentInterface,
  NotificationsInterface,
} from "./Data/userNotifications";

// const getNotifHandler = (users: User[]) => {
const getNotifHandler = () => {
  // Assuming you have saved some data in local storage with the key 'Notifications'
  const storedData = localStorage.getItem("Notifications");
  // Check if the data exists
  if (storedData) {
    // Parse the data if it's in JSON format
    const parsedData = JSON.parse(storedData);
    return parsedData;
  } else {
    // creating notif obj
    const userNotifications = defaultNotifications;
    // const userNotifications = {} as NotificationsInterface;
    // for (const user of users) {
    //   console.log(user.name);
    //   userNotifications[user.name] = [] as NotifContentInterface[];
    // }
    // userNotifications["admin1"] = [
    //   {
    //     creator: "admin",
    //     seen: false,
    //     content: "C'est un nouveau notification",
    //   },
    //   {
    //     creator: "admin",
    //     seen: false,
    //     content: "il ya quelques secondes",
    //   },
    // ];

    localStorage.setItem("Notifications", JSON.stringify(userNotifications));
    return userNotifications;
  }
};

const setNotifHandler = (
  notifications: NotificationsInterface,
  setNotifications: (notifications: NotificationsInterface) => void
) => {
  console.log("setNotifHandler triggered");
  localStorage.setItem("Notifications", JSON.stringify(notifications));
  setNotifications(notifications);
};

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<User>({} as User);
  const [, setUserId] = useState(0);
  const [selectedItem, setSelectedItem] = useState(-1);
  //
  const [notifications, setNotifications] = useState<NotificationsInterface>(
    getNotifHandler()
  );

  if (!logged)
    return (
      <LogIn setLogged={setLogged} setUser={setUser} setUserId={setUserId} />
    );

  return (
    <div className="flex flex-col h-screen">
      <Bar
        user={user}
        logOut={() => {
          setUser({} as User);
          setLogged(false);
          setSelectedItem(-1);
        }}
      />
      <div className="flex flex-col flex-1 min-[840px]:flex-row relative">
        {/*  Notifications */}
        <Notifications
          user={user}
          notifications={notifications}
          setNotifications={(notifications) => {
            setNotifHandler(notifications, setNotifications);
          }}
        />

        {/* menu */}
        <div className="min-[1050px]:w-full max-w-lg bg-stone-600 max-[840px]:max-w-full">
          <ul className="text-white max-[840px]:flex justify-evenly flex-wrap">
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
            <Menu
              user={user}
              notifications={notifications}
              setNotifications={(notifications) => {
                setNotifHandler(notifications, setNotifications);
              }}
              itemNum={selectedItem}
            />
          ) : (
            <Welcome />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
