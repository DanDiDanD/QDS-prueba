import useSWR from 'swr'
import { type ProductList } from './types/product.ts'
import { PRODUCT_LIST_API } from './lib/apis.ts'
import { fe } from './lib/fetcher.ts'

const App = (): JSX.Element => {
  const params = {
    skip: 0,
    limit: 5,
    select: ''
  }

  const { data, isLoading } = useSWR<ProductList>(params,
    async () => await fe.get(PRODUCT_LIST_API(), params)
  )

  if (isLoading) return <h1>Cargando...</h1>
  if (!data) return <h1>Error...</h1>
  const { products } = data
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  )
}

export default App
