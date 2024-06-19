import Welcome from "../Welcome";
import LogInForm from "./LogInForm";
import { User } from "../../Data/users";

// TODO: add validation to the form
interface Props {
  setUser: (user: User) => void;
  setUserId: (userId: number) => void;
  setLogged: (logged: boolean) => void;
}

const LogIn = ({ setUser, setUserId, setLogged }: Props) => {
  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center">
      <div className="w-full max-w-lg mx-4 bg-white shadow-xl shadow-gray-400 rounded-xl p-4 space-y-4">
        <Welcome />
        <LogInForm
          setUser={setUser}
          setUserId={setUserId}
          setLogged={setLogged}
        />
      </div>
    </div>
  );
};

export default LogIn;
