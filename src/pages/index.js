import React from "react"

import Layout from "../components/layout"
import Announcements from "../components/announcements"
import SEO from "../components/seo"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Announcements />
    <div class="updates">
      <h2>2021 Updates</h2>
      <p>
        Our team store is now live! Click{" "}
        <a href="https://tryafootball2021.itemorder.com/sale">here</a> for all
        your TRYA gear!
        <br />
        Make sure to place your order by Sunday, June 20th!
      </p>
      <p style={{ borderTop: "1px dashed #333333", paddingTop: "25px" }}>
        Sign ups have gone great so far for TRYA football, and we are in search
        of more players in hopes of possibly having 2 flag, 8U and 10U teams.{" "}
        <br />
        <br />
        6U Flag: Up to 7 more
        <br />
        8U: Up to 5 more
        <br />
        10U: Up to 4 more
        <br />
        12U: Full
        <br />
        <br />
        <a href="https://docs.google.com/forms/d/1oE2lhhgC5lD8xWSIsJW6tHOuFYw2RJj5bG-0JROGHQE/viewform?edit_requested=true">
          Football Registration Form
        </a>
      </p>
      <p style={{ borderTop: "1px dashed #333333", paddingTop: "25px" }}>
        The TRHS football program will be holding a one-day summer football
        clinic!
        <br />
        When: July 21, 2021
        <br />
        Ages: 7-12 years old
        <br />
        Time: 10:00-12:00
      </p>
      <p>More information to come.</p>
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
