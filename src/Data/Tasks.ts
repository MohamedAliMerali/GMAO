export interface Task {
  name: string;
  validation: boolean;
  date: string;
  note: string;
}

export default [
  {
    name: "do something",
    validation: false,
    date: "29/05/2024",
    note: "URG",
  },
  {
    name: "do something else",
    validation: false,
    date: "30/05/2024",
    note: "",
  },
  {
    name: "do that",
    validation: true,
    date: "31/05/2024",
    note: "",
  },
];
