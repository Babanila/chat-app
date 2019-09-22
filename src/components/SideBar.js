import React from "react"
import User from "../containers/User"
import "../styles/SideBar.css"

const SideBar = ({ contacts }) => {
  return (
    <aside className="SideBar">
      {contacts.map((contact, i) => (
        <User user={contact} key={contact.user_id + i} />
      ))}
    </aside>
  )
}

export default SideBar
