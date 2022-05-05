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
      <h4>ONLINE REGISTRATION FOR FOOTBALL AND CHEER IS NOW OPEN THROUGH MAY 15</h4>
      <p>
        <b>***ONLY for those submitting ALL paperwork and payment online!!***</b>
        <br/>
      </p>
      <p>
        Paperwork must be uploaded via the registration form at the time of registration.<br/>
        -Birth Certificate (football only)<br/>
        -Greenville Rec Football Waiver (football & cheer)<br/>
        -Greenville Rec player & parent code of conduct (football & cheer)<br/>
        Copies of all required Greenville Rec forms will be in the registration form or can be found on our website.<br/>
        *online football registrants will still need to come in-person for pictures and weight.<br/>
        Once online registration is submitted, payment requests will be sent within 1 business day.  Online payment methods are zelle or Venmo.
      </p>
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfoyAco8EwepBoQAuOAPhs3pBHGurFS6cwLBdnqKg_gpeO_Ow/viewform">FOOTBALL REGISTRATION FORM</a></p>
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeZw7PTAm9qIEZtyr1xKi7q8KWuKTV4jadGCJ8Xk66q5S5yvA/viewform">CHEER REGISTRATION FORM</a></p>
      <hr/>

      <h4>IN-PERSON REGISTRATION IS at TR CITY HALL @ Trailblazer Park, May 18th (6pm-8pm) & May 21st (10am - 1pm)</h4>
      <p>Football must bring a birth certificate or copy of birth certificate.  Payment accepted will be cash, money order, cashier's check, personal check, or credit card with an additional processing fee.<br/>
        **cash needs to be in a sealed/marked envelope. This should be completed prior to arrival. No change accepted. Returned checks subject to a $39 processing fee.</p>
      <P>If you would like to fill out paperwork ahead of time, please print the following and bring them with you:
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
