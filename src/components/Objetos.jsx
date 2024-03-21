const Objetos = (objeto) => {

    const { name, phone, email }  = objeto
    return (
    <div>objeto
        <ul>
            <li>{name}</li>
            <li>{phone}</li>
            <li>{email}</li>
        </ul>
    </div>
  )
}

export default Objetos