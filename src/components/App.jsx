import React, { useState, useEffect } from "react"
import Greeter from "./Greeter"

const App = () => {

  // use State:
  const [username, setUsername] = useState("")
  const handleOnChangeEvent = (e) => {
    setUsername(e.target.value)
  }

  const [loaded, setLoaded] = useState(false);

  const handleClickEvent = () => {
    setLoaded(true)
  }
  // use Effect:
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }, [loaded])
  if (!loaded) {
    return (
      <div>
        <h3>Website Loading...</h3>
        <button onClick={handleClickEvent}>button</button>
      </div>
    )
  }


  return (
    <div>
      <h1>Hello world</h1>
      <Greeter phrase="Hello there" name="Brandon" />
      <Greeter phrase="Hi" name="Cleetus" />
      <Greeter phrase="Heyah" name="Gus" />

      <input type="text" value={username} onChange={handleOnChangeEvent} />
      <p onChange={handleOnChangeEvent}>You are logging in as: {username} </p>

    </div>
  )
}

export default App;