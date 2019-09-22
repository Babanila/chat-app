/*
import React from "react"
import ReactDOM from "react-dom"
import store from "./store"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "./index.css"

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #FFF")
  console.log(store.getState())
}

const render = () => {
  fancyLog()
  return ReactDOM.render(<App />, document.getElementById("root"))
}

store.subscribe(render)
serviceWorker.unregister()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
*/

import React from "react"
import ReactDOM from "react-dom"
import emoji from "node-emoji"
import App from "../src/containers/App"
import store from "./store"
// import * as serviceWorker from "./serviceWorker"
import "./index.css"

const render = () => {
  fancyLog()
  return ReactDOM.render(<App />, document.getElementById("root"))
}

render()
store.subscribe(render)

function fancyLog() {
  console.log(
    `%c Rendered with ${emoji.emojify(
      ":heart: :heart: :heart: :star: :star: :star:"
    )}`,
    "background: purple; color: #fff"
  )
  console.log(store.getState())
}
// registerServiceWorker()
