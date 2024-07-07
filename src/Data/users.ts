export interface User {
  profileAvatar: string;
  name: string;
  password: string;
  type: string;
  authorizations: string[];
}

export default [
  {
    profileAvatar: "profileAvatar.jpg",
    name: "admin",
    password: "admin",
    type: "admin",
    authorizations: [
      "createTask",
      "validateTask",
      "deleteTask",
      "addMaintenancePlans",
      "deleteMaintenancePlans",
      "addPiece",
      "addNotifications",
    ],
  },
  {
    profileAvatar: "profileAvatar.jpg",
    name: "admin1",
    password: "0000",
    type: "admin",
    authorizations: [],
  },
  {
    profileAvatar: "profileAvatar.jpg",
    name: "user1",
    password: "user1",
    type: "user",
    authorizations: ["validateTask"],
  },
  {
    profileAvatar: "profileAvatar.jpg",
    name: "user2",
    password: "user2",
    type: "user",
    authorizations: ["validateTask"],
  },
];
