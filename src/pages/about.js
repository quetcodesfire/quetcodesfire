import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

import profile_picture from 'assets/images/p2.jpg'

const About = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return (
    <Layout pageName="about">
      <Container className="bio">
        <img src={profile_picture} alt="Marquet in the street outside of Element 84 HQ" className="profile-pic"/>
        <section className="about-me">
          <h1>About Me</h1>
          <p>
            My name is Marquet, a lot of my friends call me Quet, and handle online is QuetCodesFire. 
            I'm a Web Developer with experiences building software in a number of languages and frameworks
            and an overall tech geek in general. With my love and passion for coding and all things tech in general
            I have another love in teaching others about tech. With this I have started my journey of teaching others
            about coding, tech, and how to make a career out of it.
          </p>
        </section>
        <div className="more-info">
          <section className="fun-facts">
            <h3>Fun Facts</h3><br />

            {/* <p>Height: 6'0</p>
            <p>Weight 200lbs</p>
            <p>Born: 1/19/1990</p>
            <p>College: None</p>
            <p>Posistion: Founder/Developer</p> */}
            
            <p>Favorite Language: Javascript</p>
            <p>Favorite Super Hero: Black Panther</p>
            <p>Favorite Sport: Basketball</p>
            <p>Favorite Emoji: 🙃</p>
            <p>Favorite Movie: Friday</p>
            <p>Favorite Game: Breath of the Wild</p>
            {/* <p>Favorite Book: </p> */}
          </section>
          <section className="stats">
            <h3>Content</h3><br />
            <p>Video lessons, tutorials, code challenges and more on my youtube.</p><br />
            <p>Tech Tips and Tutorials on my Instagram.</p><br />
            <p>New podcast Joe and Quet Talks Tech coming soon!</p>
            {/* <p>New e-book on getting started in web development coming soon!</p>
            <p>New course for new developers and those looking to make a transistion into tech soon!</p> */}
          </section>

          <section className="developer-stuff">
            <h3>Developer Toolbag</h3><br />
            <p>Languages and Frameworks: HTML, CSS, Javascript, React, Gatsby, jQuery, Material-Ui, GraphQL, Node, Python, Ruby, Rails, Clojure</p>
            <br />
            <p>Databases: Mongo DB, PostgreSQL, SQL, Dynamo DB</p>
            <br />
            <p>Management and Deployment: AWS, Git, Github, Netlify, Heroku</p>
          </section>
        </div>

        {/* <h2>Stats</h2>
        <p>
          Made 2 videos so far this year
          Co-host of Joe and Quet Talk Tech
          Started Creating Educational Instagram Slides


        </p> */}
      </Container>
    </Layout>
  );
};

export default About;