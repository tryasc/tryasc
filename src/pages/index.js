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
      <p>IF THEY OPEN WE WILL PLAY!</p>
      <p>Your Travelers Rest Youth Association Board continues to meet and be prepared to play if and when the Greenville County Parks and Recreation Department allows us to do so.  We are committed to serving our community and getting back to all TRYA sponsored activities as we are able!</p>
    </div>
    <h2>Registration Forms</h2>
    <ul class='sign-up-dates'>
      <li><a href="https://forms.gle/G6iGsyjAo3szXgg48" target="_blank">Football Form</a></li>
      <li><a href="https://forms.gle/Pw1ed1HcJtrNX3Dr5" target="_blank">Cheer Form</a></li>
    </ul>
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
