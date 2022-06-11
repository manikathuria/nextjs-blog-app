import React , {useEffect, useState} from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts , getSimilarPosts } from '../services';
import { DefaultDeserializer } from 'v8';

const PostWidget = (props: {categories:any, slug:any }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if(props.slug){
      getSimilarPosts(props.categories,props.slug).then((result:any)=>setRelatedPosts(result))
    }else{
      getRecentPosts().then((result:any)=>setRelatedPosts(result))
    }
  }, [props.slug])

  console.log(relatedPosts)
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className='text-xl font-semibold mb-8 border-b pb-4 capitalize'>
        {props.slug ? 'related posts' : 'recent posts'}
      </h3>
      {relatedPosts.map((post:any)=>(
        <div key={post.title} className="flex items-center mb-4 w-full items-center">
          <div className="w-16 flex-none">
            <img src={post.featuredImage.url} alt={post.title} width="60px" height="60px" className='align-middle rounded-full' />
          </div>
          <div className="flex-grow ml-4">
            <p className='text-gray-700 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`./post/${post.slug}`} className="text-md" key={post.title}> 
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
