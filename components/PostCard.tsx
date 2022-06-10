import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = (props: {post:any}) => {
  //debugger;
  return (
    <div className="shadow-lg rounded-lg bg-white p-0 pb-12 mb-8 lg:p-8">
      <div className="overflow-hidden relative shadow-md pb-80 mb-6">
        <img src={props.post.featuredImage.url} alt={props.post.title}  
        className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="hover:text-purple-500 text-3xl font-semibold transition duration-700 text-center curson-pointer mb-8">
        <Link href={`/post/${props.post.slug}`}>
          {props.post.title}
        </Link>
      </h1>
      <div className="block text-center items-center justify-center mb-8 lg:flex">
        <div className="w-full items-center justify-center flex mb-4 lg:mb-0 lg:w-auto mr-8">
          <img src={props.post.author.photo.url} alt={props.post.author.name} height="30px" width="30px" className="align-middle rounded-full" />
          <p className='text-gray-700 inline align-middle ml-2 text-lg'>{props.post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{moment(props.post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="text-center text-gray-700 font-normal text-lg px-4 mb-8 lg:px-20">
        {props.post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${props.post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-purple-500
            text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading...
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard