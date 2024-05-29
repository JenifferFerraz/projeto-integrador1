import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Atena',
  description: 'Recomendação de Tecnologias de Banco de Dados'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-montserrat`}>
        {children}
      </body>
    </html>
  )
}
