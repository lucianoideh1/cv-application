import Header from "./components/Header"
import { useState } from "react"
function App() {

  const [test,setTest] = useState("")


  return (
    <>
    <Header></Header>
    <main>
      <form>
        <label>Name: 
          <input type="text" 
          name="name"
          value={test}
          onChange={e => setTest(e.target.value)}/>
        </label>
        <br />
      </form>
      <div className="results">
        {test}
      </div>
    </main>
    </>
  )
}

export default App
