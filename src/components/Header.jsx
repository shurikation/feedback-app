import React from 'react'
import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

//set prop by default
Header.defaultProps = {
  text: 'Feedback UI'
};

//set prop type
Header.propTypes = {
  text: PropTypes.string
}

export default Header