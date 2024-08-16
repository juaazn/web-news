import { useEffect, useContext } from 'react'
import { DataApi } from '../context/globalState'

export default function useApiNews () {
  const { article, setArticle } = useContext(DataApi)
  
  const apiArticle = async () => {
    try {
      const response = await fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=aqbSZcqI1bEGnQg8fZstWrTZtnME9L61')
      const data = await response.json()
      setArticle(data.results)
    } catch(err) {
      console.error(err)
    }
  }

  const getHighestResolutionImage = (multimedia) =>  {
    if (!multimedia || multimedia.length === 0) return null

    return multimedia.reduce((highestRes, current) => {
      const currentResolution = current.width * current.height
      const highestResolution = highestRes.width * highestRes.height

      return currentResolution > highestResolution ? current : highestRes
    })
  }

  const filteredArticles = article.filter(
    (article) => article.title && article.abstract
  )

  useEffect(() => {
    apiArticle()
  }, [])

  return {
    filteredArticles,
    getHighestResolutionImage,
  }
}
