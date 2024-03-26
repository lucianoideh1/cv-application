import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import Result from "./components/Result"
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


  return (
    <>
    <Header></Header>
    <div className="container">
    <About></About>
    <main>
          <form onSubmit={e => {e.preventDefault();console.log(e)}}>
          <legend>Personal info</legend>
            <fieldset>
              <legend>General info</legend>
              <label>Nombre: 
                <input type="text" 
                name="name"
                value={objeto.name}
                onChange={handleChange}/>
              </label>
            <br />
              <label>Email: 
                <input type="email" 
                name="email"
                value={objeto.email}
                onChange={handleChange}/>
              </label>
            <br />
              <label>Phone: 
                <input type="number" 
                name="phone"
                value={objeto.phone}
                onChange={handleChange}/>
              </label>
            <br />
          </fieldset>

          <fieldset>
            <legend>Past experiences</legend>
            <label>Company name:
              <input type="text" />
            </label>
            <br />
            <label>Position title:
              <input type="text" />
            </label>
            <br />
            <label>Responability:
              <input type="text" />
            </label>
            <br />
            <label>Period:
              <input type="text" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Studies</legend>
            <label>School name:
              <input type="text" />
            </label>
            <br />
            <label>Title of study:
              <input type="text" />
            </label>
            <br />
            <label>Time of study:
              <input type="text" />
            </label>
            <br />
          </fieldset>
          <input type="submit" value="Submit" />

          </form>
    {/* <Result  objeto={objeto}></Result> */}
    </main>
    {footer? <Footer></Footer> : null}
    </div>
    </>
  )
}

export default App
