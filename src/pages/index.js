import React from "react"
import "react-dom"

export default function Home() {
  const date = new Date().toUTCString();
  return <div>
    Hello world!
    <br/>
    {date}
  </div>
}
