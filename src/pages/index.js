import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

import logo from 'assets/images/quetcodesfire-laptop-transparent-logo.png'

const IndexPage = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return (
    <Layout pageName="home">
      <Container className="content">
        <Columns>
          <Column>
          <img src={logo} alt="Quet Codes Fire logo" className="index-logo"/>
            <h1>I code <span className="fire">fire</span> and I want to help you do the same.</h1>
            <p>Site is a work in progress, please follow me on the platforms below for content and for updates on the site.</p>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default IndexPage;
