import "../styles/about.css"

const About = () => {
  return (
    <div className="about-section">
        <div className="about-text">
        <p className="about-title">
        About
        </p>
        <article className="about-description">
          <p className="about-description">
            This was developed based on a learning project from the React.js course inside <a href="#">TheOdinProject</a>.
          </p>
          <p>The topics learned include mainly the use of state and passing props between components.</p>
        </article>
        <a href="https://github.com/lucianoideh1" className="about-learn-more" target="_blank">See portfolio</a>
        </div>
       
          <img src="project.png" alt="project" />
      
    </div>
  )
}

export default About