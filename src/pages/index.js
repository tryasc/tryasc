import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"
import LocationIcon from "@material-ui/icons/LocationOn"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="updates">
      <h2>2023 Updates</h2>
      <p>2023 Football & Cheer Registration is Now Open</p>
      <p>Online Registration will run from 5/3 - 5/20<br/>
        <a href="https://forms.gle/1A5hFX13hATkTY5P7" target="_blank" rel="noreferrer">Football</a><br/>
        <a href="https://forms.gle/sU72E8DR5JbMgFeZ8" target="_blank" rel="noreferrer">Cheer</a><br/><br/>
        In Person Registration will be held at TR Town Hall (125 Trailblazer Dr, Travelers Rest, SC 29690)<br/>
        *Wednesday, 5/17 6pm-8pm<br/>
        *Saturday, 5/20 10am-1pm<br/><br/>
        Links to required documents are below:<br/>
        <a href="https://drive.google.com/file/d/142rwLYK_dB6S3s3UvWLC69K0Zd0h-R9r/view" target="_blank" rel="noreferrer">Waiver</a><br/>
        <a href="https://drive.google.com/file/d/1JdqNy__OeLlas7801-IC6WJyvFIRtfNn/view" target="_blank" rel="noreferrer">Player/Parent Code of Conduct</a><br/>
        <a href="https://drive.google.com/file/d/1Ow-y4Myf7HTL0gBdcAzXO1SWu8shXHIo/view" target="_blank" rel="noreferrer">Physical (Football Only)</a><br/>
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
      <br />
      <LocationIcon style={{ paddingTop: "10px" }} />
      <span>PO Box 335 Travelers Rest, SC 29690</span>
    </p>
  </Layout>
)

export default IndexPage
