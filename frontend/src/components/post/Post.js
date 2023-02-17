import React from 'react';
import './Post.css'

const Post = ({post}) => {
  return(
    <div className='post-div'>
      <article className='post-message-style' data-cy="post" key={ post._id }>
        { post.message }
      </article>

    <div className='comment-style-div'>
      <a href={`/posts/${post._id}`}>
        <p className='comments-style' data-cy='comments-link'>💬 Comments: {post.comments.length}</p>
      </a>
      </div>
    </div>
  )
}

export default Post;