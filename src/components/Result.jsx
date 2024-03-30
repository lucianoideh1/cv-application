import "../styles/Result.css"

const Result = (objeto) => {

  const { name, position, email,
    phone, position_title,
    company_name, work_start,
    work_end, responsability,
    school_name, title_study, start, end
  } = objeto.objeto
  return (
    <div className="results-2">
        <div className="general-info">
            <p className="full-name">{name}</p>
            <p className="position">{position}</p>
             <p className="contact-info">{email} - {phone}</p>

        </div>
        <div className="work-experience">
            <p className="section-title">Experience</p>
            <p>{position_title}</p>
            <p>{company_name}</p>
            <p>{work_start} - {work_end}</p>
            <p>{responsability}</p>
        </div>
        <div className="studies">
            <p className="section-title">Certificates</p>
            <p>{title_study}</p>
            <p>{school_name}</p>
            <p>{start} - {end}</p>
        </div>
    </div>
  )
}

export default Result