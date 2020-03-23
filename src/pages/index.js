import React from "react";
import Nav from "../components/nav";
import Featured from "../components/featured";
import Home from "../components/home"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
  </Layout>
)

export default IndexPage
