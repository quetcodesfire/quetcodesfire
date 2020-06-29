import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

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
            {/* <h1>QuetCodesFire</h1> */}
            <p>Website coming soon. Follow me at the platforms below for updates on all things QuetCodesFire.</p>
          </Column>
        </Columns>
        <section className="icon-container">
          <div className="icons">
            <FaYoutube size={50} color="#FE2603" />
            <FaTwitter size={50} color="#1DA1F2" />
            <FaInstagram size={50} color="#FE2603" />
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
