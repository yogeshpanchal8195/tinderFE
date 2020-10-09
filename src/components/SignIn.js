import React from 'react';
import './SignIn.scss'
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from '../axios';

function SignIn() {

    const [{ }, dispatch] = useStateValue();
    const history = useHistory()
    const signIn = () => {
        auth.signInWithPopup(provider).then((data) => {
            console.log(data.user);
            localStorage.setItem("userData", JSON.stringify(data.user));
            dispatch({
                type: actionTypes.SET_USER,
                user: data.user
            })
            var obj={
               displayName: data.user.displayName,
               email: data.user.email,
               photoURL :data.user.photoURL,
               uid :data.user.uid,
            }
            updateUserDetails(obj);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateUserDetails = async function(obj){
        const req=await axios.put('/tinder/users',obj);
        console.log("REQ",req);
    }

    return (
        <div className="login">
            <div className="login_conatiner">
                <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="" />
                <h1>Sign in Tinder</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default SignIn

