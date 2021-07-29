import React, { useState } from 'react';
// import { style } from './styles';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import colors from '../../theme/colors';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

const styles = (theme) => ({
  container: {
    display: 'flex',
    height: '95vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(5, 20, 10, 20),
    display: 'flex',
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
    backgroundColor: colors.primary,
    color: 'white',
    '&:hover': {
      backgroundColor: colors.secondary,
      color: 'white',
    },
  },
  heading: {
    color: colors.secondary,
    marginBottom: theme.spacing(8),
  },
  forgot: {
    color: colors.secondary,
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginTop: theme.spacing(2),
  },
  textField: {
    color: 'black',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: colors.black,
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: colors.primary,
    },
  },
});

const Login = (props) => {
  const classes = props.classes;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    setEmail(null);
    setPassword(null);
    props.history.push('/');
  };

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.heading} variant="h4">
          Login
        </Typography>
        <form onSubmit={handleLogin} className={classes.form} validate>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                // autoComplete="new"
                variant="outlined"
                required
                fullWidth
                size="medium"
                id="email"
                label="Email Address"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                size="medium"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Typography className={classes.forgot} variant="inherit">
            Forgot Password?
          </Typography>
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(Login);
