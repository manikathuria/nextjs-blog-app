import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from '../services';

const posts = [
  {
    title:'React with tailwind css',
    excerpt:'Learn react with tailwind'
  },
  {
    title:'React with nextjs',
    excerpt:'Learn react with nextjs'
  }
]

const Home: NextPage<{posts:any}> = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
         {/* <div>
               {post.title}
              {post.excerpt}
          </div> */}
          {posts.map((post:any)=>(<PostCard  post={post} key={post.title}/>))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props:{posts}
  }
}

export default Home
