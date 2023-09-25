import useSWR from 'swr'
import { type Product } from './types/product.ts'

const App = (): JSX.Element => {
  const { data, isLoading } = useSWR<Product[]>('https://fakestoreapi.com/products',
    async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  )

  if (isLoading) return <h1>Cargando...</h1>

  return (
    <>
      <h1>Hola mundo</h1>
      <p>
        {JSON.stringify(data)}
      </p>
    </>
  )
}

export default App
