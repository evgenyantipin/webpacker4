import { typesApp } from '../../reducers'
import reducer from './reducer'

describe('postsReducer', () => {
  describe('HYDRATE', () => {
    const action = {
      type: typesApp.HYDRATE,
      data: {},
    }

    it('data.posts', () => {
      const post = { title: 'hello' }
      action.data.posts = [post]
      expect(reducer(undefined, action)).toEqual([post])
    })

    it('data.post', () => {
      const post = { title: 'hello' }
      action.data.post = post
      expect(reducer(undefined, action)).toEqual([post])
    })
  })

  describe('default', () => {
    it('without state', () => {
      expect(reducer(undefined, { type: '?' })).toEqual([])
    })

    it('with state', () => {
      expect(reducer(true, { type: '?' })).toEqual(true)
    })
  })
})
