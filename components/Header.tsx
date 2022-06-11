import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'



const Header = (props: {}) => {
    const [categories , setCategories] = useState([])
    useEffect(() => {
        getCategories().then((newCategories)=>{
          setCategories(newCategories)
        })
    }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer text-4xl text-white font-bold">
                        GraphCMS
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category:any)=>(
                    <Link key={category.slug} href={`./category/${category.slug}`}>
                        <span className="mt-2 capitalize align-middle text-white ml-4 font-semibold cursor-pointer md:float-right">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header