import { useState  } from 'react'
import styles from '../styles/form/from.module.css'

export default function () {
  const initialState = { username: '', email: '' }
  const [data, setData] = useState({ username: '', email: '' })

   const handleInput = (event) => {
      setData({ ...data, [event.target.name]: event.target.value })
   }

  const clearState = () => {
    setData({ ...initialState })
  }

  const handleSubmit  = (event) => {
    event.preventDefault()
    window.localStorage.setItem('user', JSON.stringify(data))
    clearState()
  }

  return (
    <section className={styles.container_form}>
      <div className={styles.content}>
        <h1>Subscribe to more newsletters</h1>
        <p>Subscribe to access the latest news quickly and easily with just one click.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name='username' onChange={handleInput} placeholder='Name'/>
        <input id="email" type="email" name='email' onChange={handleInput} placeholder='Email'/>
        <input type="submit" />
      </form>
    </section>
  )
}
