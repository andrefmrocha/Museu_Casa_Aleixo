import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/story"
import Services from "../components/services"
import Presentation from "../components/presentation";
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Presentation/>
    <Story/>
    <Services/>
  </Layout>
)

export default IndexPage
