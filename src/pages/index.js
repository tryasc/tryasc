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
      <h2>2021 Updates</h2>
      <p><b>*May 1:</b> Online registration will open</p>
      <p><b>*May 12th (6-8pm) & May 15th (10am-1pm):</b> In-person registration at Trailblazer Park</p>
      <p>Cost: $160 per athlete</p>
      <p>*Please Note: Football sign-ups are on a first-come, first-served basis! Each team is allowed a maximum of 22 players. If there are more than 22 players registered for an age group, we will do our best to accommodate a second team, but this will be based on if there are enough additional registrants. If there are not enough players to make two teams in an age group and your child is #23 or after in registration, they WILL NOT be able to play in the upcoming season.</p>
      <p>We’re looking forward to a great season! <b>#WeAreTR</b></p>
    </div>
    <h2>Registration Forms</h2>
    <p>Coming May 1, 2021</p>
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
