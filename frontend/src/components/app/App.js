import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import NavBar from '../navBar/navBar';
import React, { useState } from 'react';


import Feed from '../feed/Feed'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";



const HideNavbar = () => {
  const [showParentNavbar, setShowParentNavbar] = useState(true);

  setShowParentNavbar(false);
}

const App = () => {
    

    return (
      <>
        {/* {
          if (showParentNavbar) {
            return <NavBar currentPage={"/"}/>
          }
        } */}
        
        <Routes>
          <Route path='/posts' element={<Feed navigate={useNavigate()} />} />
          <Route path='/login' element={<LoginForm navigate={useNavigate()} />} />
          <Route path='/signup' element={<SignUpForm navigate={useNavigate()} />} />
        </Routes> 
      </>
    );
}

export default App;
