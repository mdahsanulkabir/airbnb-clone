import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets :['latin'],
})


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'It is a clone of Airbnb',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
