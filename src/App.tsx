import useSWR from 'swr'
import { type ProductList } from './types/product.ts'
import { PRODUCT_LIST_API } from './lib/apis.ts'
import { fe } from './lib/fetcher.ts'
import { useForm } from 'react-hook-form'
import { Header } from './components/Header.tsx'
import { Container } from './components/Container.tsx'
import { DataProvider } from './components/DataContext.tsx'
import { CardContainer } from './components/CardContainer.tsx'
import styled from 'styled-components'

type Filters = {
  skip: number
  limit: number
  select?: string
}

const DivPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const App = (): JSX.Element => {
  const defaultValues: Partial<Filters> = {
    skip: 0,
    limit: 8
  }

  const { watch, setValue } = useForm<Filters>({
    mode: 'onChange',
    defaultValues
  })

  const params = watch()

  const { data, isLoading } = useSWR<ProductList>(params,
    async (p) => await fe.get(PRODUCT_LIST_API(), p)
  )

  const total = data?.total ?? 0

  return (
    <DataProvider>
      <Header />
      <Container>
        <CardContainer data={data} isLoading={isLoading} />
        <DivPagination>
          <button
            disabled={params.skip === 0}
            onClick={() => {
              setValue('skip', params.skip - 1 * params.limit)
            }}
          >
            atras
          </button>
          <button
            disabled={params.skip + params.limit > total}
            onClick={() => {
              setValue('skip', params.skip + 1 * params.limit)
            }}
          >
            siguiente
          </button>
        </DivPagination>

      </Container>
    </DataProvider>
  )
}

export default App
