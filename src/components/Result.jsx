const Result = (objeto) => {
    // console.log(test)
    const { name, email, phone }  = objeto.objeto
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

export default Result