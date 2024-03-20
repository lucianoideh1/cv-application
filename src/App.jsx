import Form from "./components/Form"
import Header from "./components/Header"
import { useState } from "react"
import Results from "./components/Results"
function App() {

  const [test,setTest] = useState("")
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
    <main>
      {/* <Form test={test} setTest={setTest} handleOnInputChange={handleInputChange}></Form>
      <Results test={test}></Results> */}
    </main>
    </>
  )
}

export default App
