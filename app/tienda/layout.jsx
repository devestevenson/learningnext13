import Link from 'next/link'

export const metadata = {
    "title": "Tienda Oficial",
}

const layoutTienda = ({children}) => {
  return (
    <>

        <nav>
            <h4>Sección Tienda</h4>
            <ul>
                <li>
                    <Link href='/tienda/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link href='/tienda/categorias/computadoras'>Computadoras</Link>
                </li>
            </ul>
        </nav>

        {children}
    </>
  )
}

export default layoutTienda