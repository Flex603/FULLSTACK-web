import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import GrandChild from "./component/Grandchild";
import Parent from "./component/Parent";
import Count from "./component/Count";
import Login from "./component/Login";
import About from "./component/About";
import Contact from "./component/Contact";
import UserProfile from "./component/UserProfile";
import Users from "./Hooks.jsx/Users";
import SignUp from "./component/signUp";
import ProctetdRoute from "./component/ProctectedRoute";

function App(){

  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Login />} />
      <Route path="/count" element={<Count />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />

      <Route element = {<ProctetdRoute />}>

      <Route path="/user/:name" element={<UserProfile />} />
      <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;

