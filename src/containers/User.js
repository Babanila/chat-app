import React from "react"
import "../styles/User.css"

const User = ({ user }) => {
  const { name, status, profile_pic } = user
  return (
    <div className="user">
      <img src={profile_pic} alt={name} className="userPics" />
      <div className="userDetails">
        <p className="userName">{name}</p>
        <p className="userStatus">{status}</p>
      </div>
    </div>
  )
}

export default User
