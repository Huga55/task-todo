import React from "react";

const Profile = (props) => {
    return(
        <div className="profile__window">
            <div className="profile__login">
                Login
            </div>
            <div className="profile__name">
                Name
            </div>
            <div className="profile__status">
                Status
            </div>
            <div className="profile__workers">
                Подчиненные:
                <ul className="profile__list">
                    <li className="profile__elem">User1</li>
                    <li className="profile__elem">User2</li>
                    <li className="profile__elem">User3</li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;
