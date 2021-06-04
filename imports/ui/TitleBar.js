import React from 'react'
import PropTypes from 'prop-types'

export default class TitleBar extends React.Component {

  render() {
    const { title, subtitle } = this.props
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          {subtitle && <h2 className="title-bar__subtitle">{subtitle}</h2>}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

TitleBar.defaultProps = {
  title: 'Default Title'
}