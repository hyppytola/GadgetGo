import React, { useContext, useState } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Context } from '../App';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  card: {
    borderRadius: 0,
    borderBottomLeftRadius: '.5rem',
    borderBottomRightRadius: '.5rem',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const {userStore } = useContext(Context);
  const [value, setValue] = useState(0);

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const buttonProps = {
    orientation: isSmallScreen ? "vertical" : "horizontal",
    size: isSmallScreen ? "small" : "medium"
  };

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <>

      <Footer/>
    </>
  );
};

export default Profile;