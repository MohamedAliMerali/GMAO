import { useState } from "react";
import { User } from "../../../Data/users";
import tasksLists from "../../../Data/Tasks";
import { FieldValues, useForm } from "react-hook-form";
import { getCurrentFormattedDate } from "../../../util/dates";

interface Props {
  user: User;
}

const TasksList = ({ user }: Props) => {
  const { register, handleSubmit } = useForm();
  const [tasks, setTasks] = useState(tasksLists);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setTasks([
      ...tasks,
      {
        name: data.newTask,
        validation: false,
        note: data.note,
        date: getCurrentFormattedDate(),
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-5xl">Bienvenue {user.name}</h2>
      {user.authorizations.includes("createTask") ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="newTask">Nouveau Tâche:</label>
              <br />
              <input
                type="text"
                id="newTask"
                {...register("newTask")}
                placeholder="Nouveau Tâche..."
                className="rounded-lg border-none outline-none py-2 px-4 w-full"
              />
            </div>
            <div>
              <label htmlFor="note">Remarque:</label>
              <br />
              <input
                type="text"
                id="note"
                {...register("note")}
                placeholder="Note..."
                className="rounded-lg border-none outline-none py-2 px-4 w-full"
              />
            </div>
            <button
              type="submit"
              className="outline-0 border-0 py-2 px-4 bg-blue-600 text-white rounded-lg"
            >
              {" "}
              Add
            </button>
          </form>
        </div>
      ) : null}
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Les taches</th>
              <th scope="col">Validation</th>
              <th scope="col">La date</th>
              <th scope="col">Remarque</th>
              <th scope="col" colSpan={2} className="text-center">
                Controle
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(({ name, validation, date, note }, taskIndex) => (
              <tr key={taskIndex}>
                {/* <th scope="row">1</th> */}
                <td>{name}</td>
                <td>{validation ? "Done" : "Waiting"}</td>
                <td>{date}</td>
                <td>{note}</td>
                <td>
                  {user.authorizations.includes("validateTask") ? (
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        console.log("validate");
                        setTasks(
                          tasks.map((task, index) =>
                            index === taskIndex
                              ? { ...task, validation: true }
                              : task
                          )
                        );
                      }}
                    >
                      Validate
                    </button>
                  ) : (
                    " "
                  )}
                </td>
                <td>
                  {user.authorizations.includes("deleteTask") ? (
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        console.log(">> Table item Delete", taskIndex);
                        setTasks(
                          tasks.filter((_, index) => index !== taskIndex)
                        );
                      }}
                    >
                      Delete
                    </button>
                  ) : (
                    " "
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksList;
