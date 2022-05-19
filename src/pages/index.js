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
      <h2>2022 Updates</h2>
      <h4>IN-PERSON REGISTRATION is at TR CITY HALL @ Trailblazer Park, May 21st (10am - 1pm)</h4>
      <p>Football must bring a birth certificate or copy of birth certificate.  Payment accepted will be cash, money order, cashier's check, or personal check.<br/>
        **cash needs to be in a sealed/marked envelope. This should be completed prior to arrival. No change accepted. Returned checks subject to a $39 processing fee.</p>
      <p>If you would like to fill out paperwork ahead of time, please print the following and bring them with you:</p>
      <p><a href="https://drive.google.com/file/d/142rwLYK_dB6S3s3UvWLC69K0Zd0h-R9r/view">GREENVILLE REC FOOTBALL WAIVER (Also required for Cheer)</a></p>
      <p><a href="https://drive.google.com/file/d/1JdqNy__OeLlas7801-IC6WJyvFIRtfNn/view">GREENVILLE REC YOUTH & PARENT CODE OF CONDUCT</a></p>
      <p>
        Registration fees are as follows:<br/>
      Football = $180<br/>
      Cheer = $160<br/>
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
