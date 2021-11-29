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
        TRYA athletes will be participating in the Annunal Christmas parade on
        Dec. 11th, 2021. Please plan on being there by 10AM- we will release
        more details the Wednesday prior (12/8) . Please note there is a
        location change. The route is simply reversed, We will be starting at
        Bank of TR on Plaza Dr this year. Can't wait to see you all there!
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
