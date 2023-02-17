import React, { useEffect, useState } from 'react';

const Post = ({post}) => {
  const [email, setUser] = useState('No email')
  useEffect(() => {
    fetch(`/users/getPoster/${post.user_id}`, {
      // headers: {
      //   'user_id': `${post.user_id}`
      // },
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data)
        setUser(data.user.email)
      })
  }, []);
  // console.log(post)
  return(
    <div className='post-div'>
      <h5>{email}</h5>
      <article data-cy="post" key={ post._id }>
        { post.message }
      </article>

      <a href={`/posts/${post._id}`}>
        <p data-cy='comments-link'>Comments: {post.comments.length}</p>
      </a>
    </div>
  )
}

export default Post;