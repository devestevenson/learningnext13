import Navbar from "../components/Navbar";

// Importamos las fonts de google font
import { Space_Grotesk } from "next/font/google";

// Los metadatas
export const metadata = {
  "title": "Learn Next",
  "description": "Learning Next 13",
  "keywords": ['html', 'css', 'javascrpt', 'next'],
}

// Ejecutamos la font ya que es una función
const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body className={spaceGrotesk.className}>
        {/* Aquí puede ir el nav */}
        <Navbar/>

        { children }

        {/* Aquí puede ir el footer */}
      </body>
    </html>
  )
}
