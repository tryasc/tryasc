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
    <p>Vendor & Sponsorship Applications Coming May 2022.</p>
    <p>
      Please direct questions to{" "}
      <a href="mailto:travelersrestival@gmail.com">
        travelersrestival@gmail.com
      </a>
    </p>
  </Layout>
)

export default RestivalPage
