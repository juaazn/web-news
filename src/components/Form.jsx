import useData from '../hooks/useData.js'
import styles from '../styles/form/from.module.css'

export default function Form () {
  const { data, handleInput, handleSubmit } = useData()

  return (
    <section className={styles.container_form}>
      <div className={styles.content}>
        <h1>Subscribe to more newsletters</h1>
        <p>🚀 Subscribe to access the latest news quickly and easily with just one click. 📰</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name='username' onChange={handleInput} placeholder='Name' autoComplete='name' value={data.username}/>
        <input type="email" name='email' onChange={handleInput} placeholder='Email' autoComplete='email' value={data.email}/>
        <input type="submit" />
      </form>
    </section>
  )
}
