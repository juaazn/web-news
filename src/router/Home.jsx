import { useState, useEffect } from 'react'

export default function () {
  const [article, setArticle] = useState([])

  const apiArticle = async () => {
    try {
      const response = await fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=aqbSZcqI1bEGnQg8fZstWrTZtnME9L61')
      const data = await response.json()
      setArticle(data.results)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    apiArticle()
  }, [])

  return (
    <>
      <h1>Hola</h1>
      {
        article.map(article => (
          <div key={article.uri}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
          </div>
        ))
      }
    </>
  )
}
