const handleUser = (state = null, action) => {
  switch (action.type) {
    case "userLogin":
      return (state = action.user);
    case "userLogout":
      return (state = null);
    default:
      return state;
  }
};

export default handleUser;
