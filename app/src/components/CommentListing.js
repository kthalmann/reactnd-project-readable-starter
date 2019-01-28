import React, { Fragment } from 'react'
import Comment from './Comment'

export default function CommentListing({ comments, loading }) {
  return (
    <Fragment>
      <h3>Comments</h3>
      <div className="comment-listing child-borders">
        {loading && <div>loading...</div>}
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </Fragment>
  )
}
