const Objetos = (test) => {
    console.log(test)
    const { name, phone, email }  = test.test
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