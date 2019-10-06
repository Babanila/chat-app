import React from "react";
import store from "../store";
import { setActiveUserId } from "../actions";
import "../styles/User.css";

const User = ({ user }) => {
  const { name, status, profile_pic } = user;
  return (
    <div className="user" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="userPics" />
      <div className="userDetails">
        <p className="userName">{name}</p>
        <p className="userStatus">{status}</p>
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
}

export default User;
