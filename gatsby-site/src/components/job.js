import React from "react"

const Position = ({ datesHeld, position, description, skills = [] }) => {
  return (
    <div className="position position_expand">
      <div className="date" aria-label="dates held">
        {datesHeld}
      </div>
      <div className="role" aria-label="position">
        {position}
      </div>
      <div className="desc" aria-label="description">
        {description}
        <br />
        <br />
        <span className="skills">
          {skills.map(skill => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

const Job = ({
  company,
  location,
  datesHeld,
  position,
  description,
  skills = [],
}) => {
  return (
    <article className="job" aria-label="job" style={{ width: "70%" }}>
      <div className="company" aria-label="company">
        {company}
      </div>
      <div className="location" aria-label="location">
        {location}
      </div>
      <Position
        datesHeld={datesHeld}
        position={position}
        description={description}
        skills={skills}
      />
    </article>
  )
}

export default Job
