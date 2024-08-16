import styles from '../styles/footer/footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="Logo" />
        <h4>Newspaper</h4>
      </div>
      <div>
        <p><strong>Design inspired by: </strong> <q><a href="https://dribbble.com/shots/6218707-Branding-Agency-News-Page" target="_blank" rel="noopener noreferrer">Branding Agency - News Page</a></q> <cite>Broklin Onjei</cite></p>
      </div>
    </footer>
  )
}
