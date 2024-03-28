import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Result from "./components/Result"
import Results2 from "./components/Results2"
import { useState } from "react"
function App() {

  const [completedForm, setCompletedForm] = useState(false)

  function handleComplete(prevState){
    setCompletedForm(!prevState)
  }


  const [objeto, setObjeto] = useState({
    name:"nombre",
    email:"nombre@gmail.com",
    phone:1122334455,
    past_experiences:{
      company_name:"",
      position_title:"",
      responsability:"",
      work_start:"",
      work_end:""
    },
    studies:{
      school_name:"",
      study_title:"",
      start:"",
      end:""
    }
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
    <main>
          <form onSubmit={e => {e.preventDefault();console.log(e)}}>
            <fieldset>
          <legend>Personal info</legend>
              <legend>General info</legend>
              <label>Nombre: 
                <br />
                <input type="text" 
                name="name"
                value={objeto.name}
                onChange={handleChange}/>
              </label>
            <br />
              <label>Email: 
              <br />
                <input type="email" 
                name="email"
                value={objeto.email}
                onChange={handleChange}/>
              </label>
            <br />
              <label>Phone: 
              <br />
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
            <br />
              <input type="text" />
            </label>
            <br />
            <label>Position title:
            <br />
              <input type="text" />
            </label>
            <br />
            <label>Responability:
            <br />
              <input type="text" />
            </label>
            <br />
            <label>Start:
            <br />
              <input type="text" />
            </label>
            <br />
            <label>End:
            <br />
              <input type="text" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Studies</legend>
            <label>School name:
            <br />
              <input type="text" />
            </label>
            <br />
            <label>Title of study:
            <br />
              <input type="text" />
            </label>
            <br />
            <label>Start:
            <br />
              <input type="text" />
            </label>
            <br />
            <label>End:
            <br />
              <input type="text" />
            </label>
          </fieldset>
          <input type="submit" value="Submit" />

          </form>
    {/* <Result  objeto={objeto}></Result> */}
    <Results2></Results2>
    </main>
    {completedForm? <Result onSubmit={handleComplete}></Result> : null}
    <About></About>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
