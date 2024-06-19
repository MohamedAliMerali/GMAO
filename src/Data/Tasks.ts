export interface Task {
  task: string;
  responsable: string;
  validation: string;
  delay: string;
  note: string;
}

let tasks: Task[] = [
  {
    task: "do something",
    responsable: "Admin",
    delay: "2024-08-29",
    validation: "fait",
    note: "URG",
  },
  {
    task: "do something else",
    responsable: "Admin",
    validation: "pas-encore",
    delay: "2024-07-30",
    note: "",
  },
  {
    task: "do that",
    responsable: "Admin",
    validation: "pas-encore",
    delay: "2024-09-16",
    note: "",
  },
];
export default tasks;

// Function to update an existing task
export const updateTask = (updatedTask: Task[]): void => {
  tasks = updatedTask;
};
