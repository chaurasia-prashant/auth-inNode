import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import WelcomePage from './pages/welcome';
import RegistrationPage from './pages/registration';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      {/* <Navbar />
      <br /> */}
      <Routes>
        <Route path="/" exact element={<WelcomePage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* <Route path="/edit/:id" element={<EditExercise/>} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;