import Navigation from './components/navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const RootLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-[#1c1c1c]">
          <Navigation />
          <main className="flex-1 container mx-auto px-2 py-10 max-w-[512px]">{children}</main>
          <footer className="text-center text-sm text-white">
            Copyright @ All right reserved | test
          </footer>
        </div>
      </body>
    </html>
  )
}

export default RootLayout