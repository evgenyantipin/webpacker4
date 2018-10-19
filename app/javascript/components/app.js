import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Router from '../router'
import store from '../store'
import ErrorNotFound from './not-found'
import Home from './home'
import Posts from './posts'

const Application = props => {
  const { location } = props

  return (
    <Provider store={store(props)}>
      <Router location={location}>
        <React.Fragment>
          <div style={{ marginBottom: '1rem' }}>
            <Link to="/">Home</Link>
            {' | '}
            <Link to="/posts">Posts</Link>
            {' | '}
            <Link to="/contact">Contact</Link>
            {' | '}
            <Link to="/unknown">Unknown (404)</Link>
          </div>

          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/posts" exact={true} component={Posts} />
            {/* <Route path="/posts/:id" component={Post} /> */}
            <Route component={ErrorNotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  )
}

Application.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Application
