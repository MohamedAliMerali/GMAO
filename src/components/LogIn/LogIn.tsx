import { FieldValues, useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import users, { User } from "../../Data/users";

// TODO: add validation to the form
interface Props {
  setLogged: (logged: boolean) => void;
  setUser: (user: User) => void;
}

const LogIn = ({ setLogged, setUser }: Props) => {
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
        setLogged(true);
        break;
      }
    }
  };

  return (
    <div className="absolute min-h-screen w-full bg-black">
      <div className="w-full max-w-lg mx-1 bg-white shadow-xl shadow-gray-400 rounded-xl p-4 space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center">
          Bienvenue dans <br /> votre espace
        </h1>
        <img className="w-28 mx-auto" src={logo} alt="logo" />
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
          <button
            type="submit"
            className="w-full mx-auto text-center py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
