import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Presentation from "../components/presentation";
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Presentation/>
  </Layout>
)

export default IndexPage
