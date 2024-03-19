const Form = ({ test, setTest, handleOnInputChange}) => {
    


    return (
    <div>Form
        <form action="">
            <label>
            Name: 
            <input type="text" 
            name="name"
            value={test.name}/>
            </label>
            <br></br>
            <label>
            Email:   
            <input type="text" 
            name="email"
            value={test.email}/>
            </label>
            <br></br>
            <label>
            Phone:
            <input type="number" 
            name="phone"
            value={test.phone}/>
            </label>
            <br></br>
 
            <label>
            School name:
            <input type="text" 
            name="school-name"
            value={test.school_name}
            onChange={handleOnInputChange}/>
            </label>
            <br></br>
            <label>
            Title of study:
            <input type="text" 
            name="title-of-study"
            value={test.title_of_study}
            onChange={handleOnInputChange}/>
            </label>
            <br></br>
            <label>
            Period of study
            <input type="text" 
            name="period-of-study"
            value={test.perdiod_of_study}
            onChange={handleOnInputChange} />
            </label>
            <br></br>

            <label >
            Company name:
            <input type="text" 
            name="company-name"
            value={test.company_name}
            onChange={handleOnInputChange}/>
            </label>
            <br></br>
            <label>
            Position title:
            <input type="text" 
            name="position-title"
            value={test.position_title}
            onChange={handleOnInputChange} />
            </label>
            <br></br>
            <label>
            Main responsability:
            <input type="text" 
            name="responsability"
            value={test.responsability} 
            onChange={handleOnInputChange}/>
            </label>
            <br></br>

            <label>
            Period:
                <input type="text" 
                name="period"
                value={test.period} 
                onChange={handleOnInputChange}/>
            </label> 
            <br></br>   
            <input type="submit" value="Submit Form" />
        </form>

    </div>
  )
}

export default Form