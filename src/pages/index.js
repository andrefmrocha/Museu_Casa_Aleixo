import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageHeader from '../components/main_page_wrapper';
import MainPageFooter from '../components/main_page_footer';
import '../styles/font.css';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <MainPageHeader />
        <MainPageFooter />
    </Layout>
);

export default IndexPage;
