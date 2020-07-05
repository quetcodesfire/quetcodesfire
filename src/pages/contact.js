import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

const Contact = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return (
    <Layout pageName="contact">
      <Container className="contact-info">
        <Columns>
          <Column>
            <p>This is where people can come to contact me via email or a form. I'll probably have something they can sign up for as well like a newsletter or something.</p>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default Contact;