import React from "react";
import "../../styles/user-profile.css"
import 'font-awesome/css/font-awesome.min.css';

export default function UserProfile() {
    const user = {
        first_name: "duc",
        last_name: "nguyen trung"
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
                            <div className="form-floating ">
                                <input type="text" className="form-control" id="userName" placeholder="Username" />
                                <label for="userName">Username</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className="form-floating ">
                                <input type="text" className="form-control" id="firstName" placeholder="First name" />
                                <label for="firstName">First name</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className="form-floating ">
                                <input type="text" className="form-control" id="lastName" placeholder="Last name" />
                                <label for="lastName">Last name</label>
                            </div>
                        </div>

                        <div class="col-6">
                            <div className="form-floating ">
                                <input type="number" className="form-control" id="phoneNum" placeholder="Phone number" />
                                <label for="phoneNum">Phone number</label>
                            </div>
                        </div>

                    </div>
                    <div class="input-group mt-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
                    </div>
                </div>

                {/* CHANGE PASSWORD */}
                <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                    <h4 className="mb-3">Change Password</h4>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="oldPass" placeholder="Old Password" />
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
                <div className="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">...1</div>
                <div className="tab-pane fade" id="notifycation" role="tabpanel" aria-labelledby="notifycation-tab">...2</div>
            </div>
        </div>
    )
}