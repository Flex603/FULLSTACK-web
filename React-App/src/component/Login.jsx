import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContex";

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser()


  const onLogin = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:2020/users/login",{
        email,
        password,
      });
      const token = res.data
      console.log(typeof loginUser)
      setEmail("");
      setPassword("");
      const loggedInUser = await loginUser(token)
      console.log("logged in user:", loggedInUser);


      navigate(`/user/${loggedInUser._id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={onLogin} style={{margin:"250px"}}>
      {/* <input 
      type="text" 
      value={name} 
      placeholder="Enter your name" 
      onChange={(e) => setName(e.target.value)} 
      /> */}
        <input
        value={email}
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        value={password}
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

     

    </form>
  )

}
export default Login;

