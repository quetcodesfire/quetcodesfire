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
            <section className="contact-info-paragraphs">
              <h1>Contact</h1>
              <p>
                You can reach out to me on any of the places that I create content, honestly for quick questions and inqueries twitter DM's are probably the quickest place to get a reply.
              </p>
              <p>For longer more detailed messages you can email me at quet@quetcodesfire.com.</p>
            </section>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default Contact;