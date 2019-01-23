import { RECEIVE_POSTS } from '../actions/posts'

export function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }
    default:
      return state
  }
}
