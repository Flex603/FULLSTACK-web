import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../UserContex";

function UserProfile() {
     const { id } = useParams();
     const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    const {user, logoutUser, loading} =  useUser ();
    console.log(user);

    useEffect( () => {
        const getUser = async () => {
            const token = await localStorage.getItem("token");
            const res = await axios.get(`http://localhost:2020/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        };
        getUser();
    }, []);

    const Delete = async () => {
        const res = await axios.delete(`http://localhost:2020/users/${id}`);
        navigate("/sign-up");
    };

    if(loading) return <div>loading.....</div>;
   
    return (
        <>
        <div style={{
            background: theme === "light" ? "#fdf5f5" : "#333",
            color: theme === "light" ? "black" : "white", minHeight: "100vh", padding: "20px"
        }} 
>
        <h1>My name is {name}</h1>
        <button></button>

        <Link to="/">Log out</Link>

        <br />

        <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >

            Current Theme = {theme}

        </button>
        </div>
        <br />
        <button onClick={Delete}>Delete user</button>
        <h1>User Email: {user.email}</h1>
        <h1>User Role: {user.role}</h1>
        </>
    );
}  

export default UserProfile;  