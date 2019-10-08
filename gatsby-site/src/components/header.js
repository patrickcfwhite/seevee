import React from "react"

const Header = ({
  data: { myName, email, github, bioLineOne, bioLineTwo },
}) => {
  return (
    <header>
      <div aria-label="name" class="name-container">
        <a class="name">{myName}</a>
      </div>
      <div class="infotable">
        <div class="info">
          <div aria-label="contact" class="social">
            <a href={`mailto:${email}?subject=Hi%20${myName.split(" ")[0]}!`}>
              <br />
              Email
            </a>
            <a href={github} target="_blank">
              <br />
              GitHub
            </a>
          </div>
          <a class="bio" aria-label="short biography">
            <br />
            {bioLineOne}
            <br />
            {bioLineTwo}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
