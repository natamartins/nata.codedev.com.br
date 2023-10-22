import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const PostsList = ({ post }: any) => {
    const date = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt
    })

    return (
        <div className='box_posts'>
            <Link href={`/posts/${post.slug}`}  >
                <p><CalendarDays size={15} />{date}</p>
                <h1>{post.title}</h1>
                <p>{post.subtitle}</p>
                <p>{post.description}</p>
            </Link>
        </div>
    )
}

export default PostsList