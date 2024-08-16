import { createContext, useState } from 'react'

export const DataApi = createContext()

export function ArticleData ({ children }) {
  const [article, setArticle] = useState([])

  return (
    <DataApi.Provider value={{article, setArticle}}>
      { children }
    </DataApi.Provider>
  )
}
