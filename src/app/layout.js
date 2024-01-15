import { Open_Sans } from 'next/font/google'
import './globals.scss'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Seller Gaming PC',
  description: 'Prebuilt & Custom',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          openSans.className + 'min-h-screen'
        }
      >
        {children}
      </body>
    </html>
  )
}
