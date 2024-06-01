import users from "../../Data/users";

// todo: find a way to return only
const getProfileAvatar = (userId: number) => {
  return `src/assets/${users[userId].profileAvatar}`;
};

export default getProfileAvatar;
