import useSWR from 'swr'
import { type ProductList } from './types/product.ts'
import { PRODUCT_LIST_API } from './lib/apis.ts'
import { fe } from './lib/fetcher.ts'
import { useForm } from 'react-hook-form'
import { Header } from './components/Header.tsx'
import { Container } from './components/Container.tsx'
import { Card, CardContainer } from './components/Card.tsx'

type Filters = {
  skip: number
  limit: number
  select?: string
}

const App = (): JSX.Element => {
  const defaultValues: Partial<Filters> = {
    skip: 0,
    limit: 3
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
      <Header />
      <Container>
        <CardContainer>
          {products.map((product) => (
            <Card key={product.id} title={product.title} img={product.images[0]} description={product.description} price={product.price} />
          ))}
        </CardContainer>

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

      </Container>
    </>
  )
}

export default App
