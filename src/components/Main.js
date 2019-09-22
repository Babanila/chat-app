import React from "react"
import Empty from "../components/Empty"
import ChatWindow from "../containers/ChatWindow"
import "../styles/Main.css"

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    return !activeUserId ? (
      <Empty user={user} activeUserId={activeUserId} />
    ) : (
      <ChatWindow activeUserId={activeUserId} />
    )
  }
  return <main className="Main">{renderMainContent()}</main>
}

export default Main
