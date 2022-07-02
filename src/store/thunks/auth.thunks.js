import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "../slices";

export const checkingAuthentication = (email, password) => async (dispatch) => {
  dispatch(checkingCredentials());
};

export const startGoogleSignIn = () => async (dispatch) => {
  dispatch(checkingCredentials());
  const result = await signInWithGoogle();
  if (!result.ok) return dispatch(logout(result.errorMessage));
  dispatch(login(result));
};
