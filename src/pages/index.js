import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="updates">
      <h2>2021 Updates</h2>
      <p>
        Our team store is now live! Click{" "}
        <a href="https://tryafootball2021.itemorder.com/sale">here</a> for all
        your TRYA gear!
      </p>
      <p style={{ borderTop: "1px dashed #333333", paddingTop: "25px" }}>
        The TRHS football program is hosting a free one day clinic for TRYA
        players.
        <br />
        When: July 21, 2021
        <br />
        Ages: 7-12 years old
        <br />
        Flag: 10:00 - 11:30
        <br />
        8U: 10:30 - 12:00
        <br />
        10U: 11:00 - 12:30
        <br />
        12U: 11:30 - 1:00
      </p>
    </div>
    <h2>Mission</h2>
    <p>
      The purpose of the Travelers Rest Youth Association is to provide
      organized athletic instructional opportunities and the ideals of good
      sportsmanship, competitiveness, honesty, loyalty, and instruction of the
      basic fundamentals of sports for the youth of our community.
    </p>
    <h2>Contact</h2>
    <p>
      <EmailIcon style={{ paddingTop: "10px" }} />
      <a target="_blank" rel="noreferrer" href="mailto://info.tryasc@gmail.com">
        info.tryasc@gmail.com
      </a>
      <br />
      <FacebookIcon style={{ paddingTop: "10px" }} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/groups/345642595590502/"
      >
        Travelers Rest Youth Association Page
      </a>
    </p>
  </Layout>
)

export default IndexPage
