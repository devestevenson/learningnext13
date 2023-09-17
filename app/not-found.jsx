import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Página no encontrada</p>
        <Link href='/'>Vuelve a inicio</Link>
    </div>
  )
}

export default NotFound