// DataContext.tsx
import React, { createContext, useState, useEffect, type ReactNode } from 'react'
import { type Product } from '../types/product'

interface DataContextType {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
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

  return (
    <DataContext.Provider value={{ products, setProducts }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
