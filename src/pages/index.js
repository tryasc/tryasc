import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Sign-up Dates</h2>
    <ul class='sign-up-dates'>
      <li>Wednesday, May 13: 6pm-8pm</li>
      <li>Saturday, May 16: 10am–2pm</li>
      <li>Wednesday, May 20: 6pm-8pm</li>
    </ul>
    <h2>Mission</h2>
    <p>The purpose of the Travelers Rest Youth Association is to provide organized athletic
instructional opportunities and the ideals of good sportsmanship, competitiveness,
honesty, loyalty, and instruction of the basic fundamentals of sports for the youth of our
    community.</p>
    <h2>Contact</h2>
    <p><EmailIcon style={{paddingTop: '10px' }} /><a href="mailto://info.tryasc@gmail.com">info.tryasc@gmail.com</a>
    <br/>
    <FacebookIcon style={{paddingTop: '10px' }} /><a href="https://www.facebook.com/groups/345642595590502/">Travelers Rest Youth Association Page</a></p>
  </Layout>
)

export default IndexPage
