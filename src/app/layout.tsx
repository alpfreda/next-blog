import Footer from '@/components/layout/footer'
import GoTop from '@/components/layout/go-top'
import Header from '@/components/layout/header'
import NotificationCenter from '@/components/notifications/notification-center'
import { NotificationsProvider } from '@/components/notifications/notification-context'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import '../assets/main.scss'
import GTag from './gtag'

export const dynamic = 'force-dynamic' // Next.js bug for dynamic and local requests -> https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features
const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export const metadata: Metadata = {
  title: 'Mehdi Akbarzadeh',
  description: 'A Frontend Engineer',
}

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM: ', 'cleaning up')
    process.exit(0)
  })
 
  process.on('SIGINT', () => {
    console.log('Received SIGINT: ', 'cleaning up')
    process.exit(0)
  })
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <GTag />
        <NotificationsProvider>
          <Header />
          <main>{children}</main>
          <GoTop />
          <Footer />
          <NotificationCenter />
        </NotificationsProvider>
      </body>
    </html>
  )
}
