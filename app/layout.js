import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import Provider from '@/components/Provider'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Promptopia',
  description: 'Dicover and Share AI Powered Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Toaster></Toaster>
      <Provider>
      <div className='main'>
      <div className='gradient'></div>
    </div>
    <main className='app'>
    <Navbar></Navbar>
    {children}</main>
    </Provider>
    </body>
    </html>
  )
}
