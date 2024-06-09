import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import machines, {
  MaintenancePlansInterface,
  Task,
} from "../../../Data/machines";
import { User } from "../../../Data/users";
import Container from "../../../UI/Container";

interface Props {
  user: User;
}

const MaintenancePlans = ({ user }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maintenancePlans, setMaintenancePlans] = useState(
    machines.map((machine) => machine.MaintenancePlans)
  );
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
    const day = tomorrow.getDate().toString().padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  const onSubmit = (data: FieldValues) => {
    if (data.period === "") {
      console.log("error in data");
      setError(true);
      return;
    }
    setError(false);

    const KEY = data.period as keyof MaintenancePlansInterface;
    setMaintenancePlans(
      maintenancePlans.map((plan, planIndex) => {
        const currentTasks: Task[] = Array.isArray(plan[KEY]) ? plan[KEY] : [];
        return selectedItem === planIndex
          ? {
              ...plan,
              [data.period]: [
                ...(currentTasks || []),
                {
                  tasks: data.tasks,
                  responsable: data.responsable,
                  delay: data.delay,
                  validation: data.validation,
                  note: data.note,
                },
              ],
            }
          : plan;
      })
    );
  };

  if (selectedItem === -1)
    return (
      <Container pageTitle={"Vou trouvez les plans de maintenances:"}>
        <ul>
          {machines.map((machine, index) => (
            <li
              key={index}
              className="bg-blue-200 rounded-full my-2 py-2 px-4 font-medium hover:cursor-pointer transition-all hover:bg-blue-400"
              onClick={() => setSelectedItem(index)}
            >
              <span className="text-center text-red-600 bg-white rounded-full px-3 mr-2">
                {"  "}!{"  "}
              </span>
              {machine.name}
            </li>
          ))}
        </ul>
      </Container>
    );

  return (
    <Container
      pageTitle={
        "Voici le plan de maintenance du " + machines[selectedItem].name
      }
    >
      {/* buttons */}
      <div className="flex justify-end">
        {user.authorizations.includes("addMaintenancePlans") ? (
          <button
            className={
              "outline-0 border-0 py-2 px-4 rounded-lg mr-2 text-white" +
              (showForm ? " bg-red-600" : " bg-blue-600")
            }
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "cancel" : "Add A Task"}
          </button>
        ) : null}
        <button
          className="outline-0 border-0 py-2 px-4 rounded-lg text-white bg-red-600"
          onClick={() => setSelectedItem(-1)}
        >
          Return
        </button>
      </div>

      {/* Form */}
      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label htmlFor="period">Period</label>
            <select
              id="period"
              {...register("period")}
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            >
              <option value="" selected disabled>
                Sélectionnez un plan de maintenance
              </option>
              {Object.entries(maintenancePlans[selectedItem]).map(
                ([period]) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                )
              )}
            </select>
            {error ? (
              <p className="text-danger">Sélectionnez un plan de maintenance</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="tasks">Taches</label>
            <input
              type="text"
              id="tasks"
              {...register("tasks")}
              placeholder="Nouveau Tâche..."
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            />
          </div>
          <div>
            <label htmlFor="responsable">responsable</label>
            <input
              type="text"
              id="responsable"
              {...register("responsable")}
              placeholder="responsable..."
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            />
          </div>
          <div>
            <label htmlFor="delay">Dernier delais</label>
            <input
              type="date"
              id="delay"
              {...register("delay")}
              min={minDate}
              defaultValue={minDate}
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            />
          </div>
          <div className="space-x-4">
            <label htmlFor="validation">Validation: </label>
            <input
              id="validation"
              type="radio"
              value="true"
              {...register("validation")}
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="defaultRadio1" className="ms-2 text-gray-900">
              Vrai
            </label>
            <input
              checked
              id="validation"
              type="radio"
              value="false"
              {...register("validation")}
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
            />
            <label htmlFor="defaultRadio2" className="ms-2 text-gray-900">
              Faux
            </label>
          </div>
          <div>
            <label htmlFor="note">Remarque</label>
            <input
              type="text"
              id="note"
              {...register("note")}
              placeholder="Remarque?..."
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            />
          </div>
          <button
            type="submit"
            className="outline-0 border-0 py-2 px-4 rounded-lg text-white bg-blue-600"
          >
            Add..
          </button>
        </form>
      ) : null}

      {/* plans Table */}
      {Object.entries(maintenancePlans[selectedItem]).map(([period, tasks]) => (
        <table key={period} className="table table-hover mb-5">
          <thead>
            <tr className="table-light">
              <th colSpan={6} className="text-center">
                {period.toUpperCase()}
              </th>
            </tr>
            <tr className="table-light">
              <th scope="col">Les taches</th>
              <th scope="col">responsable</th>
              <th scope="col">Dernier délais</th>
              <th scope="col">Validation</th>
              <th scope="col">Remarque</th>
              {/* <th scope="col">Controle</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {console.log("tasks", tasks)} => [{...}] */}
            {tasks.map((plan: Task, taskIndex: number) => (
              <tr key={taskIndex}>
                <td>{plan.tasks}</td>
                <td>{plan.responsable}</td>
                <td>{plan.delay}</td>
                <td>{plan.validation}</td>
                <td>{plan.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </Container>
  );
};

export default MaintenancePlans;
