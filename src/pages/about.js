import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

const About = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return (
    <Layout pageName="about">
      <Container className="bio">
        <Columns>
          <Column>
            <p>This is the about section of the site. I still have to think through how 'i want to design it now and what the final design should b elike.</p>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default About;