import React from 'react'


const PostCard = (props: {post:any}) => {
  return (
    <div>
        {props.post.title}
        {props.post.excerpt}
    </div>
  )
}

export default PostCard