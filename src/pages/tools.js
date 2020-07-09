import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

const Tools = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return (
    <Layout pageName="tools">
      <Container className="tools-container">
        <Columns>
          <Column>
            <section className="contact-info-paragraphs">
              <h1>Tools</h1>
              <p>
                These are the different kind of tools and technology I use to work day to day (not including tools listed in <span>devloper toolbag</span>)
              </p>
            </section>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default Tools;