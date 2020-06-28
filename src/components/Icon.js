import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({iconName, logo, href}) => {
  return (
    <a href={href}>
      <div className={`icon ${iconName}-icon`} style={{backgroundImage: `url(${logo})`}}>
        
      </div>
    </a>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string,
  logo: PropTypes.string,
  href: PropTypes.string
}
export default Icon
