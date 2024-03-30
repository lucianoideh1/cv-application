import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Result from "./components/Result"
import { useState } from "react"
function App() {

  const [completedForm, setCompletedForm] = useState(false)

  const [objeto, setObjeto] = useState({
    name:"Full Complete Name",
    position:"Role Position",
    email:"emaildot@gmail.com",
    phone:1122334455,
      company_name:"position title",
      position_title:"company name",
      responsability:"responsability",
      work_start:"start",
      work_end:"end",
    school_name:"school name",
    study_title:"title",
    start:"start",
    end:"end"
  })
  // could flatten the array and link the children
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
    <main id="main">
    <About></About>

          <form onSubmit={e => {
            e.preventDefault();
            setCompletedForm(true)
          }}
          >
            <fieldset>
          <legend>Personal info</legend>
              <legend>General info</legend>
              <label>Nombre: 
                <input type="text" 
                name="name"
                value={objeto.name}
                onChange={handleChange}/>
              </label>
            <label>Role Position: 
                <input type="text" 
                name="position"
                value={objeto.position}
                onChange={handleChange}/>
              </label>
              <label>Email: 
                <input type="email" 
                name="email"
                value={objeto.email}
                onChange={handleChange}/>
              </label>
              <label>Phone: 
                <input type="number" 
                name="phone"
                value={objeto.phone}
                onChange={handleChange}/>
              </label>
          </fieldset>

          <fieldset>
            <legend>Past experiences</legend>
            <label>Company name:
              <input type="text"
              name="company_name"
              value={objeto.company_name}
              onChange={handleChange}/> 
            </label>
            <label>Position title:
              <input type="text" 
              name="position_title"
              value={objeto.position_title}
              onChange={handleChange}/> 
            </label>
            <label>Responability:
              <input type="text"
               name="responsability"
               value={objeto.responsability}
               onChange={handleChange}/>
            </label>
            <label>Start:
              <input type="text" 
               name="work_start"
               value={objeto.work_start}
               onChange={handleChange}/>
            </label>
            <label>End:
              <input type="text" 
               name="work_end"
               value={objeto.work_end}
               onChange={handleChange}/>
            </label>
          </fieldset>

          <fieldset>
            <legend>Studies</legend>
            <label>School name:
              <input type="text" 
               name="school_name"
               value={objeto.school_name}
               onChange={handleChange}/>
            </label>
            <label>Title of study:
              <input type="text" 
               name="study_title"
               value={objeto.study_title}
               onChange={handleChange}/>
            </label>
            <label>Start:
              <input type="text" 
               name="start"
               value={objeto.start}
               onChange={handleChange}/>
            </label>
            <label>End:
              <input type="text"
               name="end"
               value={objeto.end}
               onChange={handleChange}/>
            </label>
          </fieldset>
          <input type="submit" value="Submit" />
          </form>
    {completedForm? <Result objeto={objeto}></Result> : null}

    </main>
    <Footer></Footer>

    </div>
    </>
  )
}

export default App
