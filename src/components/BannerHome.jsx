import styles from '../styles/home/banner.module.css'
import useApiNews from '../hooks/useApiNews'

export default function BannerHome () {
  const { filteredArticles, getHighestResolutionImage } = useApiNews()
  const limitedImageApi = filteredArticles.slice(0, 4)

  return (
    <article className={styles.container_banner}>
      <figure className={styles.content_image}>
        {
          limitedImageApi.map((image) => {
            const highestResImage = getHighestResolutionImage(image.multimedia)
            return (
              highestResImage && (
                <img key={image.uri} src={highestResImage.url} alt={highestResImage.caption || 'Article Image'} />
              )
            )
          })
        }
      </figure>
      <section className={styles.content_banner}>
        <div className={styles.banner}>
          <h1>newspaper</h1>
        </div>
        <div className={styles.sub_banner}>
          <p>Discover the stories that shape the world. Access in-depth reporting, analysis and the most important news, all in one place. Please click on the join button to access all the news.</p>
        </div>
      </section>
    </article>
  )
}
