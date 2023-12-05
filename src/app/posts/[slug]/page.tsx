import { getStaticProps } from '@/utils/getPost'
import { CalendarDays, MessageSquarePlus, MoveLeft } from 'lucide-react'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import React from 'react'
import Comment from '@/components/Comment'
import { getMetadata } from '@/utils/getMetadata'
interface Type {
    params: {
        slug: string
    }
}

export const generateStaticParams = async () => {
    const posts: any = getMetadata()
    const paths = posts.map((post: any) => ({ slug: post.slug, }))

    return paths
}

const PostPge = ({ params }: Type) => {
    const slug = params.slug
    const { matterResult, date } = getStaticProps(slug)
    const post = matterResult

    return (
        <div className='box_post'>
            <Link href='/' ><MoveLeft /> Voltar na listagem</Link>
            <div className='box_post-intro'>
                <p><CalendarDays size={15} />{date}</p>
                <h1>{post.data.title}</h1>
                <h3>{post.data.subtitle}</h3>
            </div>
            <div className='box_post-content'>
                <Markdown>
                    {post.content}
                </Markdown>
            </div>
            <div className='box_post-comment'>
                <h2><MessageSquarePlus size={30} />Comentários</h2>
                <Comment postId={post.data.id} />
            </div>
            <footer className='box_post-footr'>
                <p>@Nata.Codedev - ©2023</p>
            </footer>

        </div>
    )
}
export default PostPge

