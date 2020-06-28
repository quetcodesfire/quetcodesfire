import React from 'react';
import PropTypes from 'prop-types'

const SocialMediaLinks = ({ href, info }) => {
  return (
    <a href={href} className="social-media-links">{info}</a>
  )
}

SocialMediaLinks.propTypes = {
  href: PropTypes.string,
  info: PropTypes.string
}

export default SocialMediaLinks