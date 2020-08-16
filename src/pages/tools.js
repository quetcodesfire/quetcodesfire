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
                These are the different kind of tools and technology I use to work day to day (not including tools listed in <span>developer toolbag</span>)
              </p>
              <section className="tools-lists">
                <ul>
                  <h2>Computer Stuff</h2>
                  <li>MacBook Air 2015?</li>
                  <li>Cool Master Pro L Keyboard</li>
                  <li>*Logitech Trackball Mouse</li>
                  <li>*Monitor (currently on loan)</li>
                  <li>*MacBook stand</li>
                {/* </ul>

                <ul> */}
                  <h2>Mobile Devices</h2>
                  <li>2020 11 inch iPad Pro 128gb WiFi only</li>
                  <li>Magic keyboard</li>
                  <li>Apple Pencil</li>
                  <li>iPhone X (128 gb)</li>
                  <li>Apple Watch 4th generation w/ LTE</li>
                {/* </ul>

                <ul> */}
                  <h2>Other Stuff</h2>
                  <li>Black on black Blue Yeti Mic</li>
                  <li>Steelseries Headphones</li>
                  <li>Apple Airpods</li>
                </ul>

                <ul>
                  <h2>Software</h2>
                  <li>Visual Studio Code</li>
                  <li>Zsh shell  (include aliases)</li>
                  <li>Bear</li>
                  <li>Things3</li>
                  <li>Calendly</li>
                  <li>Email App</li>
                  <li>1 password</li>
                  <li>Pixelmator for graphics and photo editing on my macbook</li>
                  <li>Graphic for graphics on my ipad</li>
                  <li>Lumafusion for video editingon my ipad</li>
                  <li>Adobe Fresco for sketching and photo editing</li>
                  <li>Record It! For video capturing on ipad</li>
                </ul>
              </section>
            </section>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default Tools;