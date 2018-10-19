import { typesApp } from '../../reducers'

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case typesApp.HYDRATE: {
      const { data } = action
      if (data.posts) {
        return data.posts
      } else if (data.post) {
        return [data.post]
      }
    }

    default: {
      return state
    }
  }
}

export default postsReducer
