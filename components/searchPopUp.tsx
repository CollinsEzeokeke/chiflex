'use client'

import React, { useState, useEffect, useRef } from 'react'
import { X as CloseIcon, Search as SearchIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Define the Product interface
interface Product {
  id: number;
  name: string;
  category: string;
}

// Mock product data
const products: Product[] = [
  { id: 1, name: "Men's Running Shoes", category: "Footwear" },
  { id: 2, name: "Women's Hiking Boots", category: "Footwear" },
  { id: 3, name: "Unisex Sandals", category: "Footwear" },
  { id: 4, name: "Kids' Sneakers", category: "Footwear" },
  { id: 5, name: "Athletic Socks", category: "Accessories" },
]

export default function Component(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
      setIsSearching(true)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchTerm])

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => {
    setIsOpen(false)
    setSearchTerm('')
    setSearchResults([])
    setIsSearching(false)
  }

  return (
    <div className="relative">
      <button onClick={handleOpen} className="p-2">
        <SearchIcon className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: isSearching ? '-25vh' : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-xl px-4"
            >
              <div className="relative w-full">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  className="w-full p-2 pr-10 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: isSearching ? 0 : 1 }}
                className="text-sm text-gray-500 mt-2 text-center"
              >
                A prompt away from your dream Footwear
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isSearching ? 1 : 0, y: isSearching ? 0 : 20 }}
              transition={{ delay: 0.2 }}
              className="absolute top-[35vh] left-0 right-0 bottom-0 overflow-auto px-4"
            >
              {searchResults.length > 0 ? (
                <ul className="space-y-2 max-w-xl mx-auto">
                  {searchResults.map((product) => (
                    <motion.li
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </motion.li>
                  ))}
                </ul>
              ) : searchTerm && (
                <p className="text-gray-500 text-center">No results found</p>
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute top-4 right-4 p-2"
            >
              <CloseIcon className="h-6 w-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}