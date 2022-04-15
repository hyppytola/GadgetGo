import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CssBaseline } from '@material-ui/core';
import AppRouter from './components/AppRouter';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { orange, teal } from '@material-ui/core/colors';
import './styles/App.css';
import UserStore from './store/UserStore';
import ThemeStore from './store/ThemeStore';

let theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: orange,
    type: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
});
theme = responsiveFontSizes(theme);
export const Context = createContext(null);

const App = () => {
  return (
    <Context.Provider value={{
      userStore: new UserStore(),
      themeStore: new ThemeStore()
    }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline/>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;