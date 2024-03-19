import Form from "./components/Form"
import Header from "./components/Header"
import { useState } from "react"
function App() {

  const [test,setTest] = useState({
    // name:"",
    // email:"",
    // phone:null,
    // school_name:"",
    // title_of_study:"",
    // period_of_study:"",
    // company_name:"",
    // position_title:"",
    // responsability:"",
    // period:""

  })
  function handleInputChange(e){
    const target = e.target
    const value = e.value
    const name =  target.name

    setTest({
      [name]:value
    })
  }

  return (
    <>
    <Header></Header>
    <h1>Cv Application</h1>
    <main>
      <Form test={test} setTest={setTest} handleOnInputChange={handleInputChange}></Form>
    </main>
    </>
  )
}

export default App
