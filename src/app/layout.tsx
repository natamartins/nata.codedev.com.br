import AboutMe from '@/components/AboutMe'
import '../Styles/style.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto(
  {
    subsets: ['latin'],
    weight: "400"
  }
)

export const metadata: Metadata = {
  title: 'Codedev&Blog.com.br',
  description: 'Meu blog pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="box_container">
          <AboutMe />
          <div className='box_container-posts'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
