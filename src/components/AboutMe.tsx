import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { Github, Instagram, Linkedin } from 'lucide-react'
import Img from '@/img/my-photo.jpeg'

const AboutMe = () => {

    return (
        <div className="box_about-me">
            <div className='box_about-me-container'>
                <Image src={Img} alt="" />
                <div className='box_about-me-info'>
                    <h1>Natã Martins</h1>
                    <p>Frontend Developer</p>
                    <p>Escrevo sobre o mundo frontend e vida pessoal.</p>
                </div>
            </div>
            <div className="box_about-spotfy">
                <iframe
                    title="Spotify Embed: Recommendation Playlist "
                    src={`https://open.spotify.com/embed/playlist/5clqcIWc4LAua1EqOojVPc`}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '15px' }}
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
            <div className="box_about-socialmidia">
                <Link href='https://www.linkedin.com/in/nat%C3%A3martins/' target='__blank' >
                    <Linkedin size={40} />
                </Link>
                <Link href='https://github.com/natamartins' target='__blank' >
                    <Github size={40} />
                </Link>
                {/* <Link href='https://www.instagram.com/nata.codedevjr/?theme=dark' target='__blank' >
                    <Instagram size={40} />
                </Link> */}
            </div>
        </div>
    )
}

export default AboutMe