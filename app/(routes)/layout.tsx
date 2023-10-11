import "../styles.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppWrapper } from '@/app/components/AppWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Genuine Article',
  description: 'A site to display genuine historical garments from the 1800s',
  openGraph: {
    title: 'The Genuine Article',
    description: 'A digital collection of genuine historical clothing from the 19th century.',
    url: 'https://thegenuinearticle.co',
    images: [
      {
        url: 'https://genuine-article-uploads.s3.us-east-2.amazonaws.com/Gallery_Images/thegenuinearticleOG.png',
        // You can optionally include width, height, and alt attributes
      },
    ],
    // Add more openGraph properties as needed
  },
  twitter: {
    card: 'summary_large_image', // or 'app' depending on your needs
    title: 'The Genuine Article',
    description: 'A digital collection of genuine historical clothing from the 19th century.',
    images: ['https://genuine-article-uploads.s3.us-east-2.amazonaws.com/Gallery_Images/thegenuinearticleTwitter.png'],
    // Add more twitter properties as needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thegenuinearticle.co"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={inter.className}>
        <div id="root">    
          <AppWrapper>
            {children}
          </AppWrapper>
        </div>
      </body>
    </html>
  )
}