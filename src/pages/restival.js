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
      We are excited to announce our 5th annual community-wide Travelers
      Restival!
      <br />
      <br />
      Saturday, August 24, 2024
      <br />
      3 PM - 8 PM
      <br />
      Trailblazer Park
    </p>
    <p><a href="https://forms.gle/ePMH2jQ6eRncS3sSA">2024 Travelers Restival Vendor Form</a></p>
    <p><a href="https://forms.gle/3ZT98WgCCdoCggjSA">2024 Travelers Restival Sponsor Form</a></p>
     <p>
      Please direct questions to{" "}
      <a href="mailto:travelersrestival@gmail.com">
        travelersrestival@gmail.com
      </a>
    </p>
  </Layout>
)

export default RestivalPage
