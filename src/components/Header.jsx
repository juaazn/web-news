import Logo from './Logo'
import styles from '../styles/Header/header.module.css'
import Buttom from './Buttom'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.container_link}>
        <ul className={styles.flex_link}>
          <li><Link to='/'>Noticias</Link></li>
          <li><Link to='/list'>Lista</Link></li>
        </ul>
        <Buttom name='Únete'/>
      </div>
    </header>
  )
}
