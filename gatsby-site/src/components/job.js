import React from "react";

export const Job = ({
  company,
  location,
  datesHeld,
  position,
  description,
  skills = [],
}) => {
  return (
    <article>
      <div>{company}</div>
      <div>{location}</div>
      <div>{datesHeld}</div>
      <div>
        <div>{position}</div>
        <div>{description}</div>
        {skills.map(skill => <span key={skill}>{skill}</span>)}
      </div>
    </article>
  )
}
