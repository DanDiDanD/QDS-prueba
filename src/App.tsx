import useSWR from 'swr'
import { type ProductList } from './types/product.ts'
import { PRODUCT_LIST_API } from './lib/apis.ts'
import { fe } from './lib/fetcher.ts'
import { useForm } from 'react-hook-form'

type Filters = {
  skip: number
  limit: number
  select?: string
}

const App = (): JSX.Element => {
  const defaultValues: Partial<Filters> = {
    skip: 0,
    limit: 5
  }

  const { watch, setValue } = useForm<Filters>({
    mode: 'onChange',
    defaultValues
  })

  const params = watch()

  const { data, isLoading } = useSWR<ProductList>(params,
    async (p) => await fe.get(PRODUCT_LIST_API(), p)
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
      <button
        onClick={() => {
          setValue('skip', params.skip - 1 * params.limit)
        }}
      >
        atras
      </button>
      <button
        onClick={() => {
          setValue('skip', params.skip + 1 * params.limit)
        }}
      >
        siguiente
      </button>
    </>
  )
}

export default App
