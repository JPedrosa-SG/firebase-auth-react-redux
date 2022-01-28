export const userLogin = (action) => {
  return {
    type: "userLogin",
    user: action,
  };
};

export const userLogout = () => {
  return {
    type: "userLogout",
  };
};
