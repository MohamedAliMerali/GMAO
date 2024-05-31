export interface User {
  name: string;
  password: string;
  type: string;
  authorizations: string[];
}

export default [
  {
    name: "admin",
    password: "admin",
    type: "admin",
    authorizations: [
      "",
      "createTask",
      "validateTask",
      "deleteTask",
      "addMaintenancePlans",
      "deleteMaintenancePlans",
    ],
  },
  { name: "admin1", password: "0000", type: "admin", authorizations: [] },
  { name: "user1", password: "user1", type: "user", authorizations: [] },
  { name: "user2", password: "user2", type: "user", authorizations: [] },
];
