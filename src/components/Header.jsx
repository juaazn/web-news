import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { subcribeGlobalContext } from '../context/subcribeContext'
import Logo from './Logo'
import styles from '../styles/Header/header.module.css'
import Buttom from './Buttom'

export default function () {
  const { subcribe } = useContext(subcribeGlobalContext)

  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.container_link}>
        <ul className={styles.flex_link}>
          <li><Link to='/web-news/'>Home</Link></li>
          { 
            subcribe === true ?
              <li><Link to='/web-news/list'>News</Link></li>
              : <p className={styles.disabled_button}>News</p>
          }
        </ul>
        {
          subcribe === false ?
            <Buttom name='Join us'/>
            : null
        }
      </div>
    </header>
  )
}
