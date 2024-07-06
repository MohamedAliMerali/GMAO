import { NotificationsInterface } from "../../../Data/userNotifications";
import users, { User } from "../../../Data/users";
import userAvatar from "../../../assets/profileAvatar.jpg";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Container from "../../../UI/Container";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  user: User;
  notifications: NotificationsInterface;
  setNotifications: (notifications: NotificationsInterface) => void;
}

const NotificationForm = ({ user, notifications, setNotifications }: Props) => {
  const { register, handleSubmit } = useForm();
  const userNotif = notifications[user.name];

  const onSubmit = (data: FieldValues) => {
    console.log("notifications Form submitted", data);
    setNotifications({
      ...notifications,
      [data.selectedUserName]: [
        ...notifications[data.selectedUserName],
        {
          creator: user.name,
          seen: false,
          content: data.notifications,
        },
      ],
    });
  };

  return (
    <Container pageTitle={""}>
      {user.authorizations.includes("addNotifications") ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label htmlFor="user">Utilisateur à notifier:</label>
            <select
              id="selectedUserName"
              {...register("selectedUserName")}
              onChange={(event) => {
                console.log("event:", event.target.value);
              }}
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            >
              {users.map((user, index) => (
                <option key={index} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="notifications">Notifications</label>
          <div className="flex flex-col space-y-4  sm:flex-row sm:space-x-2 sm:space-y-0">
            {/* input */}
            <div className="w-full flex flex-col">
              <textarea
                id="notifications"
                {...register("notifications")}
                placeholder="Nouveau notifications..."
                className="rounded-lg border-none outline-none py-2 px-4 max-w-full grow"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col grow space-y-2 min-[400px]:flex-row min-[400px]:space-x-2 min-[400px]:space-y-0 sm:flex-col sm:space-x-0 sm:space-y-2">
              <button
                type="submit"
                className="w-full outline-0 border-0 h-fit py-2 px-12 rounded-lg text-white bg-blue-600"
              >
                Ajouter...
              </button>
              <button
                type="reset"
                className="w-full outline-0 border-0 h-fit py-2 px-12 rounded-lg text-white bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        </form>
      ) : null}

      <div>
        <h3 className="font-medium text-4xl my-4">
          Historique des notifications
        </h3>
        <ul className="list-group list-group-flush space-y-4">
          {userNotif.length ? (
            userNotif.map((notif, index) => (
              <li
                key={index}
                className="flex justify-between text-3xl bg-slate-100 rounded-full pr-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="shrink-0">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={userAvatar}
                      alt="user avatar"
                    />
                  </div>
                  <div className="max-h-16 hide-scrollbar overflow-auto">
                    {notif.content} {notif.content}
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:cursor-pointer">
                  <div>{notif.creator}</div>
                  <div>
                    {notif.seen ? (
                      <IoMdEye size={25} />
                    ) : (
                      <IoMdEyeOff size={25} />
                    )}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>Historique est vide</p>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default NotificationForm;
