import React, { useEffect, useState } from "react";
import "../../styles/user-profile.css"
import 'font-awesome/css/font-awesome.min.css';
import Popup from "../layouts/popup";
import { useDispatch, useSelector } from "react-redux"
import { findUserById, getUserInfo, updateUser } from "../../redux/reducers/auth";
import $ from "jquery"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserProfile() {

    const user = useSelector(state => state.auth.userInfo)
    const disatch = useDispatch();

    const [temp, setTemp] = useState(user);
    const [change, setChange] = useState(true);

    useEffect(() => {
        setTemp(user)
    }, [change])

    const onSaveClicked = () => {
        // disatch(updateUser(user.id, {
        //     ...temp
        // })).then(response => {
        //     disatch(findUserById(response.id)).then(res => {
        //         toast.success("User info updated successfully");
        //         change === true ? setChange(false) : setChange(true);
        //     })
        // })

        disatch(updateUser({
            ...temp
        })).then(res => {
            disatch(getUserInfo());
            change === true ? setChange(false) : setChange(true);
        })
    }

    const onCancleClicked = () => {
        change === true ? setChange(false) : setChange(true);
    }

    const onSavePassword = () => {
        const oldPass = $("#oldPass").val().trim();
        const newPass = $("#newPass").val().trim();
        const confirmPass = $("#confirmPass").val().trim();
        if (oldPass === "" || newPass === "" || confirmPass === "") {
            toast.warning("Please enter all required field");
        } else if (newPass !== confirmPass) {
            toast.warning("Confirm password not correct");
        } else if (oldPass !== user.USER_KEY) {
            toast.warning("Current password not correct");
        } else {
            // disatch(updateUser(user.id, {
            //     ...temp, USER_KEY: newPass
            // })).then(response => {
            //     disatch(findUserById(response.id)).then(res => {
            //         toast.success("Password updated successfully");
            //         change === true ? setChange(false) : setChange(true);
            //         $("#oldPass").val("");
            //         $("#newPass").val("");
            //         $("#confirmPass").val("");
            //     })
            // })
        }
    }

    return (
        <div>
            <div className="body d-flex align-items-start">

                <div className="tab nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <div className="App">
                        <img className="avatar rounded-circle border" src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png" alt="avatar unavailable" />
                        <h5>{user.userName}</h5>
                        <hr className="my-3" />
                    </div>
                    <button className="nav-link active" id="acc-settings-tab" data-bs-toggle="pill" data-bs-target="#acc-settings" type="button" role="tab" aria-controls="acc-settings" aria-selected="true">Account Settings</button>
                    <button className="nav-link" id="password-tab" data-bs-toggle="pill" data-bs-target="#password" type="button" role="tab" aria-controls="password" aria-selected="false">Change Password</button>
                    <button className="nav-link" id="privacy-tab" data-bs-toggle="pill" data-bs-target="#privacy" type="button" role="tab" aria-controls="privacy" aria-selected="false">Privacy</button>
                    <button className="nav-link" id="notifycation-tab" data-bs-toggle="pill" data-bs-target="#notifycation" type="button" role="tab" aria-controls="notifycation" aria-selected="false">Notification</button>

                </div>

                <div className="tab-content content" id="v-pills-tabContent">

                    {/* USER INFOR */}
                    <div className="tab-pane fade show active" id="acc-settings" role="tabpanel" aria-labelledby="acc-settings-tab">
                        <h4 className="mb-3">Account Information</h4>

                        <div class="row g-2">
                            <div class="col-6">
                                <label for="firstName" class="col-sm-4 col-form-label"><strong>First name</strong></label>
                                <div class="col-sm-10">
                                    <input id="firstName" class="form-control" type="text" value={user.firstName} readonly />
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="lastName" class="col-sm-4 col-form-label"><strong>Last name</strong></label>
                                <div class="col-sm-10">
                                    <input id="lastName" class="form-control" type="text" value={user.lastName} readonly />
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="username" class="col-sm-4 col-form-label"><strong>Username</strong></label>
                                <div class="col-sm-10">
                                    <input id="username" class="form-control" type="text" value={user.userName} readonly />
                                </div>
                            </div>

                            <div class="col-6">
                                <label for="email" class="col-sm-4 col-form-label"><strong>Email</strong></label>
                                <div class="col-sm-10">
                                    <input id="email" class="form-control" type="text" value={user.email} readonly />
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="phoneNo" class="col-sm-5 col-form-label"><strong>Phone number</strong></label>
                                <div class="col-sm-10">
                                    <input id="phoneNo" class="form-control" type="text" value={user.phoneNumber} readonly />
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary mt-4 ml-3" data-bs-toggle="modal" data-bs-target="#changeInfo">Change user info</button>

                        {/* POP-UP TO CHANGE USER INFO */}

                        <Popup id="changeInfo" aria_labelledby="title">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="title">Change user info</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form class="row g-3">
                                            <div class="col-md-6">
                                                <label for="inputFirstname" class="form-label">First name</label>
                                                <input type="text" class="form-control" id="inputFirstname" value={temp.firstName} onChange={(e) => setTemp({
                                                    ...temp, firstName: e.target.value
                                                })} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputLastname" class="form-label">Last name</label>
                                                <input type="text" class="form-control" id="inputLastname" value={temp.lastName} onChange={(e) => setTemp({
                                                    ...temp, lastName: e.target.value
                                                })} />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputUsername" class="form-label">Username</label>
                                                <input type="text" class="form-control" id="inputUsername" value={temp.userName} onChange={(e) => setTemp({
                                                    ...temp, userName: e.target.value
                                                })} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputEmail" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="inputEmail" value={temp.email} onChange={(e) => setTemp({
                                                    ...temp, email: e.target.value
                                                })} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputPhone" class="form-label">Phone number</label>
                                                <input type="tel" class="form-control" id="inputPhone" pattern="[0-9]{4} [0-9]{3} [0-9]{3}" maxLength="12" value={temp.phoneNumber} onChange={(e) => setTemp({
                                                    ...temp, phoneNumber: e.target.value
                                                })} />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onCancleClicked()}>Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => onSaveClicked()}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </div>

                    {/* CHANGE PASSWORD */}
                    <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                        <h4 className="mb-3">Change Password</h4>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="oldPass" placeholder="Old Password" />
                            <label for="oldPass">Old Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="newPass" placeholder="New Password" />
                            <label for="newPass">New Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="confirmPass" placeholder="Confirm Password" />
                            <label for="confirmPass">Confirm Password</label>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => onSavePassword()}>Save</button>
                    </div>

                    {/* Privacy settings */}
                    <div className="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                        <h4 className="mb-3">Privacy Settings</h4>
                    </div>

                    {/* Notification settings */}
                    <div className="tab-pane fade" id="notifycation" role="tabpanel" aria-labelledby="notifycation-tab">
                        <h4 className="mb-3">Notification Settings</h4>
                    </div>
                </div>
            </div>
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={3500} />
        </div>
    )
}