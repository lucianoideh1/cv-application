const Form = ({ objeto, setObjeto, handleChange, handleSubmit}) => {

 const { name, email, phone} = objeto

  return (
    <div>
           <form onSubmit={handleSubmit}>
        <label>Nombre: 
          <input type="text" 
          name="name"
          value={name}
          onChange={handleChange}/>
        </label>
        <br />
        <label>Email: 
          <input type="email" 
          name="email"
          value={email}
          onChange={handleChange}/>
        </label>
        <br />
        <label>Phone: 
          <input type="number" 
          name="phone"
          value={phone}
          onChange={handleChange}/>
        </label>
        <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form