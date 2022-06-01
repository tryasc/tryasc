import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RestivalImg from "../images/restival.jpg"

const RestivalPage = () => (
  <Layout>
    <SEO title="Restival" />
    <p style={{ textAlign: "center" }}>
      <img src={RestivalImg} alt="Travelers Restival" width="500" />
    </p>
    <p>
      We are excited to announce our 3rd annual community-wide Travelers
      Restival!
      <br />
      <br />
      Saturday, August 20, 2022
      <br />
      3 PM - 8 PM
      <br />
      Trailblazer Park
    </p>
    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdRkYnsokPz4uVTsY76E5qT0Kk8CTENJfskD7xLDnewTOciGA/viewform">2022 Travelers Restival Sponsor Form</a></p>
    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSe0i80iG4rC5_PWvvYkXRSgSwYYQBlzGKrkaT9M6rHKd-dkZQ/viewform">2022 Travelers Restival Market Vendor & Food Vendor Application</a></p>
     <p>
      Please direct questions to{" "}
      <a href="mailto:travelersrestival@gmail.com">
        travelersrestival@gmail.com
      </a>
    </p>
  </Layout>
)

export default RestivalPage
