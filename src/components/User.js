import React, { useEffect, useState } from 'react'
import './User.scss';
import { useStateValue } from '../StateProvider';
import reducer, { initialState, store } from '../reducer';
import { Button, Select } from '@material-ui/core';
import axios from '../axios'

function User() {
    const user = JSON.parse(localStorage.getItem('userData'));
    const [edit, setEdit] = useState(false);
    const [userFormData, setUserFormData] = useState({
        photoURL: user.photoURL || "",
        uid: user.uid || "",
        displayName: user.displayName || "",
        email: user.email || "",
        location: user.location || "",
        age: user.age || "",
        gender: user.gender || "1",
        showMe: user.showMe || "2",
    });

    const genderList = {
        "0": "Both Male & Female",
        "1": "Male",
        "2": "Female"
    }

    const updateInfo = () => {
        setEdit((x) => !x);
    }

    const updateUserDetails = async function () {
        const req = await axios.put('/tinder/users', userFormData);
        if (req.status == 200) {
            localStorage.setItem('userData', JSON.stringify(userFormData))
            setEdit(false)
        }
    }

    const inputChangeHandler = (event) => {
        setUserFormData({
            ...userFormData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="user_cont">
            {
                !edit ?
                    <>
                        <div className="user_img">
                            <img src={user.photoURL} alt="" />
                        </div>
                        <div className="user_name">
                            {user?.displayName} {user.age && `, ${user?.age}`}
                        </div>
                        <div className="user_details">
                            {user.email &&
                                <div className="detail_row">
                                    <div className="key">Email : </div>
                                    <div>{user.email}</div>
                                </div>
                            }
                            {user.email &&
                                <div className="detail_row">
                                    <div className="key">Location : </div>
                                    <div>{user.location}</div>
                                </div>
                            }
                            {user.gender && genderList[user.gender] &&
                                <div className="detail_row">
                                    <div className="key">Gender : </div>
                                    <div>{genderList[user.gender]}</div>
                                </div>
                            }
                            {user.showMe && genderList[user.showMe] &&
                                <div className="detail_row">
                                    <div className="key">Show Me : </div>
                                    <div>{genderList[user.showMe]}</div>
                                </div>
                            }
                        </div>
                        <Button onClick={updateInfo}>Update Profile</Button>
                    </>
                    :
                    <>
                        <form action="" name="userForm">
                            <div className="form-row">
                                <input type="text" name="displayName" value={userFormData.displayName} onChange={inputChangeHandler} readOnly />
                            </div>
                            <div className="form-row">
                                <input type="text" name="email" value={userFormData.email} onChange={inputChangeHandler} readOnly />
                            </div>
                            <div className="form-row">
                                <input type="text" name="location" placeholder="Location" value={userFormData.location} onChange={inputChangeHandler} />
                            </div>
                            <div className="form-row">
                                <input type="number" max="60" name="age" placeholder="Age" value={userFormData.age} onChange={inputChangeHandler} />
                            </div>
                            <div className="form-row">
                                <div className="formLabel">
                                    Gender
                                </div>
                                <div onChange={inputChangeHandler}>
                                    <input type="radio" value="1" name="gender" onChange={inputChangeHandler}  checked={userFormData.gender === "1"}/> Male&nbsp;
                                    <input type="radio" value="2" name="gender" onChange={inputChangeHandler}  checked={userFormData.gender === "2"}/> Female
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="formLabel">
                                    Show me
                                </div>
                                <div >
                                    <input type="radio" value="0" name="showMe" onChange={inputChangeHandler}  checked={userFormData.showMe === "0"}/> Both&nbsp;
                                    <input type="radio" value="1" name="showMe" onChange={inputChangeHandler}  checked={userFormData.showMe === "1"}/> Male&nbsp;
                                    <input type="radio" value="2" name="showMe" onChange={inputChangeHandler}  checked={userFormData.showMe === "2"}/> Female
                                </div>
                            </div>
                            <div className="form-row">
                                <Button onClick={updateUserDetails}>Update</Button>
                            </div>
                        </form>
                    </>
            }
        </div>
    )
}

export default User
