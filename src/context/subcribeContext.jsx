import { createContext, useState } from 'react'

export const subcribeGlobalContext = createContext()

export function SusbcribeGlobalContext ({ children }) {
  const [ subcribe, setSubcribe ] = useState(false)

  return (
    <subcribeGlobalContext.Provider
      value={{ subcribe, setSubcribe }}
    >
      {children}
    </subcribeGlobalContext.Provider>
  )
}

