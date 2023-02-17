import React, { useEffect, useState } from 'react';

const Comment = ({comment}) => {
    const [user, setUser] = useState('Anonymous')
    useEffect(() => {
    fetch(`/users/getPoster/${comment.user_id}`, {
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
    return(
        <div className='post-div'>
            <h5>{user}</h5>
            <article data-cy="comment" key={ comment._id }>
                { comment.content }
            </article>
        </div>
    )
}

export default Comment;
