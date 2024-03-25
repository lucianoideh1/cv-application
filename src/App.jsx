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

  function handleChange(e) {
    setObjeto({
      ...objeto,
      [e.target.name]:e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const result = { name, email, phone }
    console.log(result)
  }

  return (
    <>
    <Header></Header>
    <div className="container">
    <About></About>
    <main>

      <Form objeto={objeto}
            setObjeto={setObjeto} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
      ></Form>
    </main>
    <Result  test={objeto}></Result>
    {footer? <Footer></Footer> : null}
    </div>
    </>
  )
}

export default App
