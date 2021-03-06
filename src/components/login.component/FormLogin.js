import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./templet/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/getAction";
import Message from "./Message";

export default function FormLogin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    const getUsename = (e) => {
        setUsername(e.target.value);
    };
    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const loginButton = () => {
        try {
            dispatch(login(username, password));
            history.push("/");
        } catch (err) {
            setMessage("Login fail !!!");
        }
    };
    
    return (
        <>
            <div className="container">
                <div className="form">
                    <form action="#" method="#">
                        <h2 className="title">Welcome to webside!!!</h2>
                        <Message message={message}></Message>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Usename"
                            className="password"
                            onChange={getUsename}
                        />
                        <input
                            type="password"
                            className="password"
                            placeholder="Password"
                            onChange={getPassword}
                        />
                        <button
                            type="button"
                            className="button"
                            onClick={loginButton}
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="info">
                    <Link className="login-registration" to="/registration">
                        Registration
                    </Link>
                </div>
            </div>
        </>
    );
}
