import {
  registerUserWithForm,
  signInWithGoogle,
} from "../../firebase/providers";
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

export const startCreatingUserWithForm =
  ({ email, password, displayName }) =>
  async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserWithForm({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, photoURL, email }));
  };
