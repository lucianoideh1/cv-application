import About from "./components/About"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import Result from "./components/Result"
import { useState } from "react"
function App() {

  const footer = false
  const [objeto, setObjeto] = useState({
    name:"nombre",
    email:"nombre@gmail.com",
    phone:1122334455,
  })
  
  // past_experiences:[{},{},{}]
  // study_experience:[{},{},{}]

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
      <Form></Form>
    </main>
    <Result  test={objeto}></Result>
    {footer? <Footer></Footer> : null}
    </div>
    </>
  )
}

export default App
