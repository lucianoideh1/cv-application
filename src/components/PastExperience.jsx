import PropTypes from  'prop-types'

const PastExperience = ({props}) => {

    const { 
        position_title,
        company_name, 
        work_start,
        work_end,
        responsability,
      } = props

  return (
    <div className="work-experience">
        <h1>past experiences</h1>
    <p className="section-title">Experience</p>
    <p>{position_title}</p>
    <p>{company_name}</p>
    <p>{work_start} - {work_end}</p>
    <p>{responsability}</p>
    </div>
  )
}

PastExperience.propTypes = {
    props: PropTypes.object
}

PastExperience.propTypes = {
    position_title: PropTypes.string,
    company_name: PropTypes.string,
    work_start: PropTypes.string,
    work_end: PropTypes.string,
    responsability: PropTypes.string,
}

export default PastExperience