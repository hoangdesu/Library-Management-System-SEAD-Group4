import React, { useState } from "react";
import "../../styles/user-profile.css"
import 'font-awesome/css/font-awesome.min.css';
import Popup from "../layouts/popup";

export default function UserProfile() {

    const [user, setUser] = useState({
        first_name: "duc",
        last_name: "nguyen trung",
        email: "ntduc.291099@gmail.com",
        phone: 8109283123,
        username: "something"
    })

    const onSaveClicked = () => {
        console.log(user)
    }

    const onCancleClicked = () => {
        console.log("cancle")
    }

    return (

        <div className="body d-flex align-items-start">
            <div className="tab nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="App">
                    <img className="avatar rounded-circle border" src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png" alt="avatar unavailable" />
                    <h5>{user.first_name + " " + user.last_name}</h5>
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
                                <input id="firstName" class="form-control" type="text" value={user.first_name} readonly />
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="lastName" class="col-sm-4 col-form-label"><strong>Last name</strong></label>
                            <div class="col-sm-10">
                                <input id="lastName" class="form-control" type="text" value={user.last_name} readonly />
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="username" class="col-sm-4 col-form-label"><strong>Username</strong></label>
                            <div class="col-sm-10">
                                <input id="username" class="form-control" type="text" value={user.username} readonly />
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
                                <input id="phoneNo" class="form-control" type="text" value={user.phone} readonly />
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
                                            <input type="text" class="form-control" id="inputFirstname" value={user.first_name} onChange={(e) => setUser({
                                                first_name: e.target.value, last_name: user.last_name, email: user.email, phone: user.phone, username: user.username
                                            })} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputLastname" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="inputLastname" value={user.last_name} onChange={(e) => setUser({
                                                first_name: user.first_name, last_name: e.target.value, email: user.email, phone: user.phone, username: user.username
                                            })} />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputUsername" class="form-label">Username</label>
                                            <input type="text" class="form-control" id="inputUsername" value={user.username} onChange={(e) => setUser({
                                                first_name: user.first_name, last_name: user.last_name, email: user.email, phone: user.phone, username: e.target.value
                                            })} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputEmail" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="inputEmail" value={user.email} onChange={(e) => setUser({
                                                first_name: user.first_name, last_name: user.last_name, email: e.target.value, phone: user.phone, username: user.username
                                            })} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputPhone" class="form-label">Phone number</label>
                                            <input type="tel" class="form-control" id="inputPhone" pattern="[0-9]{4} [0-9]{3} [0-9]{3}" maxlength="12" value={user.phone} onChange={(e) => setUser({
                                                first_name: user.first_name, last_name: user.last_name, email: user.email, phone: e.target.value, username: user.username
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
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                <div className="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                    <h4 className="mb-3">Privacy Settings</h4>
                </div>
                <div className="tab-pane fade" id="notifycation" role="tabpanel" aria-labelledby="notifycation-tab">
                    <h4 className="mb-3">Notification Settings</h4>
                </div>
            </div>
        </div>
    )
}