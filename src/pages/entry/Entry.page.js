import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {LoginForm} from '../../components/login/Login.comp'
import './entry.style.css';
import { useState } from 'react';
export const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOnchange = e => {
        const {name, value} = e.target
        console.log(name, value)
    }

    return (
        <div className="entry-page">
            <Jumbotron className="form-box">
                <LoginForm/>
            </Jumbotron>
        </div>
    );
};