import { useState, useEffect } from 'react'
import styles from '../styles/article/card.module.css'

export default function Card () {

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

  return (
    <main className={styles.position}>
      <article className={styles.content}>
      {
          filteredArticles.map((article) => {
            const highestResImage = getHighestResolutionImage(article.multimedia)
            return (
              <section className={styles.card} key={article.uri}>
                {highestResImage && (
                  <img
                    src={highestResImage.url}
                    alt={highestResImage.caption || 'Article Image'}
                  />
                )}
                <h3>{article.title}</h3>
                <p>{article.abstract}</p>
              </section>
            )
          })
        }
      </article>
    </main>
  )
}
