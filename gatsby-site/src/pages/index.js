import React from "react"
import { graphql } from "gatsby"
import "../components/style.css"
import Job from "../components/job"
import Header from "../components/header"

const IndexPage = ({ data }) => (
  <body>
    <Header data={data.site.siteMetadata} />
    <main>
        {data.site.siteMetadata.jobs.map(job => (
          <Job {...job} />
        ))}
    </main>
  </body>
)

export const query = graphql`
  query JobsQuery {
    site {
      siteMetadata {
        myName
        email
        github
        bioLineOne
        bioLineTwo
        jobs {
          company
          location
          datesHeld
          position
          description
          skills
        }
      }
    }
  }
`

export default IndexPage
