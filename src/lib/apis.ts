type id = string | number

export const PRODUCT_LIST_API = (): string => '/products'
export const PRODUCT_API = (id: id): string => `/products/${id}`
