import React, { useEffect, useState } from 'react';
import './Post.css'

const Post = ({post}) => {
  const [user, setUser] = useState('Anonymous')
  useEffect(() => {
    console.log(post.user_id)
    fetch(`/users/getPoster/${post.user_id}`, {
      // headers: {
      //   'user_id': `${post.user_id}`
      // },
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data)
        let email = data.user.email
        let name = email.split('@')[0]

        setUser(name)
      })
  }, []);
  // console.log(post)
  return(
    <div className='post-div'>
      <h5>{user}</h5>
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