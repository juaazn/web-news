import styles from '../styles/home/banner.module.css'

export default function () {
  return (
    <article className={styles.container_banner}>
      <section className={styles.content_banner}>
        <div className={styles.banner}>
          <h1>newspaper</h1>
        </div>
        <div className={styles.sub_banner}>
          <p>Discover the stories that shape the world. Access in-depth reports, analyses, and the most important news, all in one place.</p>
        </div>
      </section>
      <figure className={styles.content_image}>
        <img src="https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="smartphone news" />
        <img src="https://images.unsplash.com/photo-1559523275-98fb3c56faf6?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="interview" />
        <img src="https://images.unsplash.com/photo-1605186909539-7a0ba14a6637?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="vaccines" />
        <img src="https://images.unsplash.com/photo-1611287158961-84f21a9a9fb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="newspapers" />
      </figure>
    </article>
  )
}
