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
      We are excited to announce our 2nd annual community-wide Travelers
      Restival.
      <br />
      Saturday, August 21, 2021
      <br />
      3 PM - 8 PM
      <br />
      Trailblazer Park
    </p>
  <p>
    For updates, and to see our list of great silent auction items, click <a href="https://sites.google.com/view/travelersrestival/home">here</a>
  </p>
    <p>
      <a
        href="https://forms.gle/qQNYASncdcp4NTx49"
        target="_blank"
        rel="nofollow"
      >
        2nd Annual Travelers Restival Vendor Application
      </a>
    </p>
    <p>
      <a
        href="https://forms.gle/npo1EvxkQLK5hh988"
        target="_blank"
        rel="nofollow"
      >
        2nd Annual Travelers Restival Sponsor Form
      </a>
    </p>
    <p>
      Please direct questions to{" "}
      <a href="mailto:travelersrestival@gmail.com">
        travelersrestival@gmail.com
      </a>
    </p>
  </Layout>
)

export default RestivalPage
