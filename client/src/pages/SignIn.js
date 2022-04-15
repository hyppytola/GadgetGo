import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
/*import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';*/
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import { Controller, useForm } from 'react-hook-form';
import { Context } from '../App';
import { UserAPI } from '../http';
import AuthErrors from '../components/AuthErrors';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.light,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const { userStore } = useContext(Context);
/*
  const { control, handleSubmit } = useForm();
  const [loginErrors, setLoginErrors] = useState([]);


  const signIn = async (data) => {
    const user = await UserAPI.login(data);
    if (!user.success) {
      userStore.setIsAuth(false);
      userStore.setUser({});
      setLoginErrors(user.errors);
    } else {
      userStore.setIsAuth(true);
      userStore.setUser(user.data);
      localStorage.setItem('user', JSON.stringify(user.data));
    }
  };*/

  if (userStore.isAuth) {
    return <Redirect to="/news"/>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm/>
      </div>
      <Footer/>
    </Container>
  );
};

export default SignIn;