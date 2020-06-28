import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import SocialMediaLinksContainer from '../components/SocialMediaLinksContainer';

const Links = () => (
  <Layout pageName="home">
    <Container className="content">
      <SocialMediaLinksContainer />
    </Container>
  </Layout>
)

export default Links