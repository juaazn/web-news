import Layout from '../layout/Layout'
import styles  from '../styles/form/from.module.css'
import Form from '../components/Form'


export default function () {
  return (
    <Layout>
      <main className={styles.contiener}>
        <Form />
      </main>
    </Layout>
  )
}
