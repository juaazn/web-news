import Header from '../components/Header'

export default function Layout ({ children }) {

  return (
    <div className='layout'>
      <Header />
        {children}
    </div>
  )
}