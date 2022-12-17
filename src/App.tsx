import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Welcome from './components/welcome/welcome.component'
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import SignIn from "./components/signIn/signIn.component";
import SignUp from "./components/signUp/signUp.component";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<><Navbar/><Outlet/><Footer/></>}>
                <Route index element={<Welcome />}/>
                <Route path='sign-in' element={<SignIn/>}/>
                <Route path='sign-up' element={<SignUp/>}/>
            </Route>
        </Routes>
  );
}

export default App;
