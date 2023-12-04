'use client'
import React, { useEffect, useRef } from 'react'

const Comments = ({ postId }: any) => {
    const commentBox: any = useRef(null)

    useEffect(() => {
        let scriptEl = document.createElement('script')
        scriptEl.setAttribute('theme', 'github-dark')
        scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
        scriptEl.setAttribute('crossorigin', 'anonymous')
        scriptEl.setAttribute('repo', 'natamartins/nata.codedev.com.br')
        scriptEl.setAttribute('issue-term', `postId-${postId}`)
        commentBox.current.replaceChildren(scriptEl)
    }, [postId])

    return <div className='box_comment' ref={commentBox} />
}

export default Comments