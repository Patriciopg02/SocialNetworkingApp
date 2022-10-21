import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Components/pages/Home/Home.jsx";
import "./App.css";
import EventDetail from "./Components/Events/EventDetail.jsx";
import EventsPage from "./Components/pages/EventsPage/EventsPage.jsx";
import Profile from "./Components/pages/ProfileUser/Profile.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Login from './Components/Login'
import Signup from './Components/Signup'
import ProtectedRoute from './Components/ProtectedRoute'
import { UserAuthContextProvider } from "./context/UserAuthContext.js";
import Home from "./Components/pages/Home/Home.jsx";

function App() {
  return (
    <>
    
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/profile/:email" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path="/events" element={<ProtectedRoute><EventsPage/></ProtectedRoute>}/>
        </Routes>
        </UserAuthContextProvider>
      </LocalizationProvider>
      
    </>
  );
}
//          <Route exact path="/events/:id" element={<ProtectedRoute><EventDetail /></ProtectedRoute>} />
//<Route exact path="/profile/:email" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
export default App;
