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
       Mark your calendars for October 8th - TRYA Night at Travelers Rest High School!  Players and Cheerleaders 
       get into the game free and will be introducted by team at halftime.  
       Football players please wear your jersey and Cheerleaders please wear your uniforms.  We hope to see you there!
      </p>
      <p style={{ borderTop: "1px dashed #333333", paddingTop: "25px" }}>
        Our season has officially begun! Click{" "}
        <a href="https://docs.google.com/document/d/1t9LqhqtstxDjEHTlREJkV9aopZ8crxbSkXOaCTPDq7U/edit">here</a> for the full schedule!
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
