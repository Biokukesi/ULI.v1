// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './pages/DashBoard';

import { StyledContainer } from './components/Styles';


import { useState } from "react";
import { css } from "@emotion/react";
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App()
{
  return (
    <Router>
      <StyledContainer>
        <Signup />
      </StyledContainer>
    </Router>
  );
}

export default App;
