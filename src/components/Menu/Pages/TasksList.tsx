import { FieldValues } from "react-hook-form";
import TasksForm from "./PagesComponent/TasksForm";
import { User } from "../../../Data/users";
import { Task, updateTask } from "../../../Data/Tasks";
import Container from "../../../UI/Container";

interface Props {
  user: User;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
}

// Todo:
// - we cann make the user info in locale storage
// - we can give the admin a way to give and remove privileges

const TasksList = ({ user, tasks, setTasks }: Props) => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const newTasks = [
      ...tasks,
      {
        task: data.tasks,
        responsable: data.responsable,
        validation: data.validation,
        delay: data.delay,
        note: data.note,
      },
    ];
    // Todo* remove that update task func since it is not working
    updateTask(newTasks);
    setTasks(newTasks);
  };

  return (
    <Container pageTitle={"Bienvenue " + user.name}>
      {user.authorizations.includes("createTask") ? (
        <TasksForm onSubmit={onSubmit}></TasksForm>
      ) : null}
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Les taches</th>
              <th scope="col">Responsable</th>
              <th scope="col">Validation</th>
              <th scope="col">La date</th>
              <th scope="col">Remarque</th>
              <th scope="col" colSpan={2} className="text-center">
                Controle
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(
              ({ task, responsable, validation, delay, note }, taskIndex) => (
                <tr key={taskIndex}>
                  {/* <th scope="row">1</th> */}
                  <td>{task}</td>
                  <td>{responsable}</td>
                  <td>{validation}</td>
                  <td>{delay}</td>
                  <td>{note}</td>
                  <td>
                    {user.authorizations.includes("validateTask") ? (
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => {
                          console.log("validate");
                          // automate this using enumerated types
                          setTasks(
                            tasks.map((task, index) =>
                              index === taskIndex
                                ? {
                                    ...task,
                                    validation:
                                      task.validation === "pas-encore"
                                        ? "en-cours"
                                        : "fait",
                                  }
                                : task
                            )
                          );
                        }}
                      >
                        Valider
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
                        Supprimer
                      </button>
                    ) : (
                      " "
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default TasksList;
