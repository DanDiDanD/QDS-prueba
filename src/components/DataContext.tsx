import React, { createContext, useState, useEffect, type ReactNode } from 'react'
import { type Product } from '../types/product'
import { ToastContainer, toast } from 'react-toastify'

interface DataContextType {
  products: Product[]
  count: number
  totalPrice: string
  addProduct: (item: Product) => void
  removeProduct: (item: Product) => void
  emptyCart: () => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

interface DataProviderProps {
  children: ReactNode
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedData = localStorage.getItem('products')
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (item: Product): void => {
    setProducts([...products, item])
    toast('Producto añadido al carrito!')
  }

  const removeProduct = (item: Product): void => {
    setProducts(products.filter((product) => product.id !== item.id))
    toast('Producto removido del carrito!')
  }

  const emptyCart = (): void => {
    setProducts([])
    toast('Carrito Vacio!')
  }

  const count = products.length

  const totalPrice = `$${products.reduce((acc, product) => acc + product.price, 0)}`

  return (
    <DataContext.Provider value={{ products, count, totalPrice, addProduct, removeProduct, emptyCart }}>
      {children}
      <ToastContainer />
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
