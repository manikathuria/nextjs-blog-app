import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = (props: {post:any}) => {
  //debugger;
  return (
    <div className="shadow-lg rounded-lg bg-white p-0 pb-12 mb-8 lg:p-8">
      <div className="overflow-hidden relative shadow-md pb-80 mb-6">
        <img src={props.post.node.featuredImage.url} alt={props.post.title}  
        className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  )
}

export default PostCard