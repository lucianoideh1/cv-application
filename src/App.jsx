import About from "./components/About"
import Header from "./components/Header"
import Objetos from "./components/Objetos"
import { useState } from "react"
function App() {

  const [objeto, setObjeto] = useState({
    name:"nombre",
    email:"nombre@gmail.com",
    phone:1122334455,
  })

  function handleOnChange(e) {
    setObjeto({
      ...objeto,
      [e.target.name]:e.target.value
    })
  }

  return (
    <>
    <Header></Header>
    <div className="container">
    <About></About>
    <main>
      <form>
        <label>Nombre: 
          <input type="text" 
          name="name"
          value={objeto.name}
          onChange={handleOnChange}/>
        </label>
        <br />
        <label>Email: 
          <input type="email" 
          name="email"
          value={objeto.email}
          onChange={handleOnChange}/>
        </label>
        <br />
        <label>Phone: 
          <input type="number" 
          name="phone"
          value={objeto.phone}
          onChange={handleOnChange}/>
        </label>
        <br />

      </form>
    </main>
    <Objetos  test={objeto}></Objetos>
    </div>
    </>
  )
}

export default App
