import "../styles/result.css"
import PastExperience from "./PastExperience"
import PropTypes from  'prop-types'


const Result = ({props}) => {

  const { name, position, email,
    phone, position_title,
    company_name, work_start,
    work_end, responsability,
    school_name, title_study, start, end
  } = props
  return (
    <div className="results-2">
        <div className="general-info">
            <p className="full-name">{name}</p>
            <p className="position">{position}</p>
             <p className="contact-info">{email} - {phone}</p>

        </div>
        <PastExperience props={{position_title, company_name, work_start, work_end, responsability}}></PastExperience>
        <div className="studies">
            <p className="section-title">Certificates</p>
            <p>{title_study}</p>
            <p>{school_name}</p>
            <p>{start} - {end}</p>
        </div>
    </div>
  )
}

Result.propTypes = {
  props: PropTypes.object
}

Result.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  position_title: PropTypes.string,
  company_name: PropTypes.string,
  work_start: PropTypes.string,
  work_end: PropTypes.string,
  responsability: PropTypes.string,
  school_name: PropTypes.string,
  title_study: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
}

export default Result