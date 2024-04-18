import React from 'react'
import ReactDom from "react-dom"

function Popup () {
  return (
    <div>
      <h1>Hello Extension</h1>
    </div>
  )
}

ReactDom.render(<Popup/>,document.getElementById("root"))