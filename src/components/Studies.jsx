import PropTypes from  'prop-types'

const Studies = ({props}) => {

    const {
        title_study,
        school_name,
        start,
        end
    } = props

  return (
    <div className="studies">
    <p className="section-title">Certificates</p>
    <p>{title_study}</p>
    <p>{school_name}</p>
    <p>{start} - {end}</p>
</div>
  )
}

Studies.propTypes = {
    props: PropTypes.object
}


Studies.propTypes = {
    title_study: PropTypes.string,
    school_name: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string
}

export default Studies