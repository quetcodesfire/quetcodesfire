import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';
import Icon from 'components/Icon'

import logo from 'assets/images/quetcodesfire-laptop-transparent-logo.png'
import twitter_logo from 'assets/images/twitter-bird-logo.png'
import ig_logo from 'assets/images/instagram-logo.png'
// import youtube_logo from 'assets/images/youtube-logo-hd.png'
import youtube_logo from 'assets/images/youtube-icon.png'

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
            <Icon iconName='twitter' href='http://twitter.com/quetcodesfire' logo={twitter_logo}/>
            <Icon iconName='instagram' href='http://instagram.com/quetcodesfire_' logo={ig_logo}/>
            <Icon iconName='youtube' href='http://youtube.com/quetcodesfire' logo={youtube_logo} />
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
