import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="updates">
      <h2>Updates</h2>
      <p>GOOD NEWS!  Greenville Rec has given us approval to proceed with the 2020 fall football and cheer season! </p>
    </div>
    <h2>Registration Forms</h2>
    <p>2020 Registration is closed.</p>
    <h2>Mission</h2>
    <p>The purpose of the Travelers Rest Youth Association is to provide organized athletic
instructional opportunities and the ideals of good sportsmanship, competitiveness,
honesty, loyalty, and instruction of the basic fundamentals of sports for the youth of our
    community.</p>
    <h2>Contact</h2>
    <p><EmailIcon style={{paddingTop: '10px' }} /><a target="_blank" href="mailto://info.tryasc@gmail.com">info.tryasc@gmail.com</a>
    <br/>
    <FacebookIcon style={{paddingTop: '10px' }} /><a target="_blank" href="https://www.facebook.com/groups/345642595590502/">Travelers Rest Youth Association Page</a></p>
  </Layout>
)

export default IndexPage
