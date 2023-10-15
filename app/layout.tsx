import Header from '@/components/header/header'
import { Metadata } from 'next'
import './global.scss'
import Footer from '@/components/footer/footer'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
    weight: ['400', '700'],
    subsets: ['cyrillic', 'latin'],
    display: 'swap'
})

export const metadata: Metadata = {
    title: 'Yaku',
    description: 'Быстрое поле чудес без Якубовича',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={ubuntu.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}