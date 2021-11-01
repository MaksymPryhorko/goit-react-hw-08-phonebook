const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUsername = (state) => state.auth.user.name;
const getError = (state) => state.auth.error;
const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
  getError,
};
export default authSelectors;
