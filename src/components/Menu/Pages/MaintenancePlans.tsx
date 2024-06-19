import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import TasksForm from "./PagesComponent/TasksForm";
import machines, { MaintenancePlansInterface } from "../../../Data/machines";
import { User } from "../../../Data/users";
import Container from "../../../UI/Container";
import { Task } from "../../../Data/Tasks";

interface Props {
  user: User;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
}

const MaintenancePlans = ({ user, tasks, setTasks }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showForm, setShowForm] = useState(false);
  const [error] = useState(false);
  const [maintenancePlans, setMaintenancePlans] = useState(
    machines.map((machine) => machine.MaintenancePlans)
  );
  const [periodState, setPeriodState] = useState<string>(
    Object.entries(maintenancePlans[0])[0][0] // hebdomadaire
  );

  const { register } = useForm();
  const onSubmit = (data: FieldValues) => {
    data.period = periodState;
    console.log(">> Data:", data);
    // todo: ig no need for this, check later
    // if (data.period === "") {
    //   console.log("error in data");
    //   setError(true);
    //   return;
    // }
    // setError(false);

    setTasks([
      ...tasks,
      {
        task: data.tasks,
        responsable: data.responsable,
        validation: data.validation,
        delay: data.delay,
        note: data.note,
      },
    ]);

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
              className="bg-white rounded-full my-2 py-2 px-4 font-medium hover:cursor-pointer transition-all hover:bg-blue-400"
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
        <div className="space-y-2">
          <div>
            <label htmlFor="period">Period</label>
            <select
              id="period"
              {...register("period")}
              value={periodState}
              onChange={(event) => {
                console.log("event:", event.target.value);
                setPeriodState(event.target.value);
              }}
              className="rounded-lg border-none outline-none py-2 px-4 w-full"
            >
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
          <TasksForm onSubmit={onSubmit}></TasksForm>
        </div>
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
                <td>{plan.task}</td>
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
