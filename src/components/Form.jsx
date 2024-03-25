const Form = (props) => {
  return (
    <div>Form
           <form onSubmit={props.handleOnSubmit}>
        <label>Nombre: 
          <input type="text" 
          name="name"
          value={props.objeto.name}
          onChange={props.handleOnChange}/>
        </label>
        <br />
        <label>Email: 
          <input type="email" 
          name="email"
          value={props.objeto.email}
          onChange={props.handleOnChange}/>
        </label>
        <br />
        <label>Phone: 
          <input type="number" 
          name="phone"
          value={props.objeto.phone}
          onChange={props.handleOnChange}/>
        </label>
        <br />

      </form>
    </div>
  )
}

export default Form