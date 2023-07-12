import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PostsList = ({ post }: any) => {


    return (
        <div className='box_posts'>
            <Link href={`/posts/${post.slug}`}  >
                <p><CalendarDays size={15} />{post.date}</p>
                <h1>{post.title}</h1>
                <p>{post.subtitle}</p>
                <p>{post.description}</p>
            </Link>
        </div>
    )
}

export default PostsList