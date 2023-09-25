export type ListProps = {
  total: number
  skip: number
  limit: number
}

export type Params = Record<string, string | string[] | number | number[] | undefined | Date | boolean | null> | undefined
