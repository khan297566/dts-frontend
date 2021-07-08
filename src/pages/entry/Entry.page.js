import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {LoginForm} from '../../components/login/Login.comp'
import {ResetPassword} from '../../components/password-reset/PasswordReset.comp'
import { useState } from 'react';
import './entry.style.css';

export const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frmLoad, setFrmLoad] = useState("login")

    const handleOnchange = e => {
        const {name, value} = e.target

        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;

            default:
                break;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (!email || !password){
            return alert("Fill up all the form!");
        }

        //ToDo Call api to submit the form
        console.log(email, password);
    };

    const handleOnResetSubmit = e => {
        e.preventDefault();

        if (!email){
            return alert("Please enter the email!");
        }

        //ToDo Call api to submit the form
        console.log(email);
    };

    const formSwitcher = frmtype => {
        setFrmLoad(frmtype);
    }

    return (
        <div className="entry-page">
            <Jumbotron className="form-box">
                {frmLoad === 'login' && 
                <LoginForm 
                handleOnchange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                pass={password}
                />}
                
                {frmLoad === 'reset' &&
                <ResetPassword 
                handleOnchange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}
                />}
            </Jumbotron>
        </div>
    );
};