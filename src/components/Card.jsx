import styles from '../styles/article/card.module.css'
import useApiNews from '../hooks/useApiNews'

export default function Card () {

  const { filteredArticles, getHighestResolutionImage } = useApiNews()

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
