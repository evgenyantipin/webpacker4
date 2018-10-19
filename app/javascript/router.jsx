import React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const Router = ({ children, location }) => {
  const onServer = typeof window === 'undefined'
  if (onServer) {
    return (
      <StaticRouter location={location} context={{}}>
        {children}
      </StaticRouter>
    )
  } else {
    return <BrowserRouter>{children}</BrowserRouter>
  }
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}

export default Router
