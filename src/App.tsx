import useSWR from 'swr'
import { type Product } from './types/product.ts'
import { PRODUCT_LIST_API } from './lib/apis.ts'
import { fe } from './lib/fetcher.ts'

const App = (): JSX.Element => {
  const { data, isLoading } = useSWR<Product[]>(PRODUCT_LIST_API(),
    fe.get
  )

  if (isLoading) return <h1>Cargando...</h1>
  if (!data) return <h1>Error...</h1>

  return (
    <>
      <h1>Hola mundo</h1>
      {data.map(product => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </>
  )
}

export default App
