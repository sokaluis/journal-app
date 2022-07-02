import { checkingCredentials } from "../slices/auth.slice";

export const checkingAuthentication = (email, password) => async (dispatch) => {
  dispatch(checkingCredentials());
};

export const starGoogleSignIn = () => async (dispatch) => {
  dispatch(checkingCredentials());
};
