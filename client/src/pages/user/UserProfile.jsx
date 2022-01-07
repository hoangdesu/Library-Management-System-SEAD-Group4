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
                <button className="nav-link" id="privacy-tab" data-bs-toggle="pill" data-bs-target="#privacy" type="button" role="tab" aria-controls="privacy" aria-selected="false">Privacy</button>
                <button className="nav-link" id="notifycation-tab" data-bs-toggle="pill" data-bs-target="#notifycation" type="button" role="tab" aria-controls="notifycation" aria-selected="false">Notification</button>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="acc-settings" role="tabpanel" aria-labelledby="acc-settings-tab">
                    Account Settings
                </div>
                <div className="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">...1</div>
                <div className="tab-pane fade" id="notifycation" role="tabpanel" aria-labelledby="notifycation-tab">...2</div>
            </div>
        </div>
    )
}