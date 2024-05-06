import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AuctionPage = () => (
  <Layout>
    <SEO title="Auction" />
    <h1>Travelers Restival Silent Auction</h1>
    <p>
      Thank you for investing in our community & children with your generous
      donation to the Travelers Restival Silent Auction!
    </p>
    <p>
      Auction items will be available to bid on at our 5th annual Travelers
      Restival on August 24, 2024.
    </p>
    <p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf0CIroiGuaKyjR3IMxXXpntLQVjSViM5Rbj33F_Sqkdbligg/viewform"
        target="_blank"
        rel="noreferrer"
      >
        Travelers Restival Silent Auction Donation Application
      </a>
    </p>
    <p>Please direct questions to <a href="mailto://travelersrestival@gmail.com">travelersrestival@gmail.com</a>.</p>
  </Layout>
)

export default AuctionPage
