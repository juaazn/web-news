import style from '../styles/banner-social-media/banner.module.css'

export default function Banner () {
  return (
    <article className={style.container_banner}>
      <figure className={style.container_links}>
        <a href="https://www.nytimes.com/international/" target="_blank" rel="noopener noreferrer"><img src="./news.svg" alt="" /></a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer"><img src="./twitter.svg" alt="Logo svg" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="./instagram.svg" alt="Logo Instagram" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="./github.svg" alt="Logo GitHub" /></a>
      </figure>
      <section className={style.felx_span_h1}>
        <span className={style.span_message}>
          <div className={style.line}></div>
          <p>Quick View</p>
        </span>
        <h1 className={style.title}>news</h1>
      </section>
      <section className={style.message}>
        <h3>Creativity</h3>
        <p>This week is characterized by creative events, where we see technological advances from America and Europe which can change the way we live.</p>
      </section>
    </article>
  )
}
