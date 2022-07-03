import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { startGoogleSignIn, startLogInUserWithForm } from "../../store/thunks";

const formData = {
  email: "luis@gmail.com",
  password: "123456",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @."],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 caracteres.",
  ],
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    formState,
  } = useForm(formData, formValidations);

  const isCheckingAuth = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startLogInUserWithForm(formState));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isCheckingAuth}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isCheckingAuth}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
