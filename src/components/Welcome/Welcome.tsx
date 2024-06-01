import logo from "../../assets/logo.png";

const Welcome = () => {
  return (
    <div className="bg-white rounded-2xl p-4 m-2 space-y-4">
      <h1 className="text-center">
        Bienvenue dans <br /> votre espace
      </h1>
      <img className="w-28 mx-auto" src={logo} alt="logo" />
    </div>
  );
};

export default Welcome;
