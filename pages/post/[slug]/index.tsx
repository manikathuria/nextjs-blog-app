import React from 'react'
import {getPosts, getPostDetails} from '../../../services'
import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../../components'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {post:any}

const PostDetails = (props: Props) => {
  return (
    <div className="mx-auto container px-10-mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                {/* <PostDetail  post={props.post}/>
                <Author author={props.post.author} />
                <Comments slug={props.post.slug} />
                <CommentsForm slug={props.post.slug} /> */}
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                    <PostWidget slug={props.post.slug} categories = {props.post.categories.map((category:any)=>category.slug)} />
                    <Categories />

                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails;

export const getStaticProps: GetStaticProps = async (context:any)=>{
    debugger;
    const data = getPostDetails(context.params.slug)
    return {
      props:{post:data}
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: any }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
