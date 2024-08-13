import { Link } from 'react-router-dom'
import styles from '../styles/Header/header.module.css'

export default function Buttom (props) {
  return (
    <>
      <Link to='/form' className={styles.buttom}>{props.name}</Link>
    </>
  )
}
