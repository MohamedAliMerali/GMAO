import { FieldValues, useForm } from "react-hook-form";
import users, { User } from "../../Data/users";
import { useState } from "react";

interface Props {
  setUser: (user: User) => void;
  setUserId: (userId: number) => void;
  setLogged: (logged: boolean) => void;
}

const LogInForm = ({ setUser, setUserId, setLogged }: Props) => {
  const [logInError, setLogInError] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    for (let index = 0; index < users.length; index++) {
      if (
        data.user === users[index].name &&
        data.password === users[index].password
      ) {
        console.log(">> ok hh", index);
        console.log(users[index]);
        setUser(users[index]);
        setUserId(index);
        setLogged(true);
        break;
      }
      setLogInError(true);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">User</label>
        <input
          {...register("user")}
          id="user"
          name="user"
          type="text"
          placeholder="User ID"
          className="border-2 border-zinc-400 rounded-md w-full py-3 px-1"
        />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          {...register("password")}
          id="password"
          name="password"
          type="password"
          placeholder="********"
          className="border-2 border-zinc-400 rounded-md w-full py-3 px-1"
        />
      </div>
      {logInError ? (
        <p className="text-red-500 text-center font-semibold">Log In Error</p>
      ) : null}
      <button
        type="submit"
        className="w-full mx-auto text-center py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition-all"
      >
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
