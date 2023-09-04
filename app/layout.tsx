import Header from '@/components/header/header'
import { Metadata } from 'next'
import './global.scss'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
    title: 'Yaku',
    description: 'Быстрое поле чудес без Якубовича',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}