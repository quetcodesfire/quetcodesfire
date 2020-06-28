import React from 'react';

import SocialMediaLinks from './SocialMediaLinks';

import profile_pic from 'assets/images/p2.jpg';
import logo from 'assets/images/quetcodesfire-laptop-transparent-logo.png'

const SocialMediaLinksContainer = () => {
  return (
    <section class="social-media-links-container">
      <img src={profile_pic} alt="Marquet standing in the street." className="profile-pic" />
      <SocialMediaLinks href="https://youtube.com/quetcodesfire" info="QuetCodesFire Youtube" />
      {/* <SocialMediaLinks href="https://youtube.com/quetcodesfire" info="Joe and Quet Talk Tech Website" />
      <SocialMediaLinks href="https://youtube.com/quetcodesfire" info="Joe and Quet Talk Tech Twitter" />
      <SocialMediaLinks href="https://youtube.com/quetcodesfire" info="Joe and Quet Talk Tech Instagram" /> */}
      <SocialMediaLinks href="https://twitter.com/quetcodesfire" info="QuetCodesFire Twitter" />
      <SocialMediaLinks href="https://instagram.com/quetcodesfire_" info="QuetCodesFire Instagram" />
      <SocialMediaLinks href="https://quetcodesfire.com" info="QuetCodesFire Website (under construction)" />
      <SocialMediaLinks href="https://marquetreid.com" info="Portfolio Site" />
      <img src={logo} alt="Quet Codes Fire logo." className="social-media-links-logo" />
    </section>
  )
}

export default SocialMediaLinksContainer