const Objetos = (test) => {
    console.log(test)
    const { name, email, phone }  = test.test
    return (
    <div className="results">
        <ul>
            <li>{name}</li>
            <li>{email}</li>
            <li>{phone}</li>
        </ul>
    </div>
  )
}

export default Objetos