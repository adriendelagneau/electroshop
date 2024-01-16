import { Inter } from 'next/font/google'
import AuthProvider from '@/components/providers/AuthProvider'
import SmoothScrolling from '@/components/providers/LennisProvider'
import { Toaster } from 'sonner';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Electro Shop',
  description: 'Electro Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Toaster />
          <div className='text-skin-base'>
            <SmoothScrolling>
              {children}
            </SmoothScrolling>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
