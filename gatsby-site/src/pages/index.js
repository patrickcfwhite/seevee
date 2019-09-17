import React from "react";
import { graphql } from "gatsby"

import { Job } from "../components/job";

const IndexPage = ({data}) => (
  <div>
    {data.site.siteMetadata.jobs.map(job => <Job {...job}/>)}
  </div>
)

export const query = graphql`
  query JobsQuery {
    site {
      siteMetadata {
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
