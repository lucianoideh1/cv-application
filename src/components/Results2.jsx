import "../styles/results2.css"

const Results2 = () => {
  return (
    <div className="results-2">
        <div className="general-info">
            <p className="full-name">Full Complete Name</p>
            <p className="position">Role Position</p>
        <p className="contact-info">emaildot@gmail.com - 1122334455</p>

        </div>
        <div className="work-experience">
            <p className="section-title">Experience</p>
            <p>position title</p>
            <p>company name</p>
            <p>start - end</p>
            <p>responsability</p>
        </div>
        <div className="studies">
            <p className="section-title">Certificates</p>
            <p>title</p>
            <p>school name</p>
            <p>start - end</p>
        </div>
    </div>
  )
}

export default Results2