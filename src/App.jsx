import Header from "./components/Header"
import Objetos from "./components/Objetos"
import { useState } from "react"
function App() {

  const [test,setTest] = useState("")
  // const objeto = {
  //   name:"nombre",
  //   email:"nombre@gmail.com",
  //   phone:1122334455,
  // }
  const [objeto,setObjeto] = useState({
    name:"nombre",
    email:"nombre@gmail.com",
    phone:1122334455,
  })

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
    <Objetos  test={objeto}></Objetos>
    </>
  )
}

export default App
