import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Post = ({ id, title }) => (
  <li>
    <h3>
      <Link to={`/posts/${id}`}>{title}</Link>
    </h3>
  </li>
)

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

const Posts = ({ posts }) => (
  <div>
    <h1>Posts</h1>
    <ul style={{ listStyleType: 'none' }}>
      {posts.map(({ id, title }) => (
        <Post id={id} title={title} key={id} />
      ))}
    </ul>
  </div>
)

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

const mapState = ({ posts }) => ({ posts })

export default connect(mapState)(Posts)
