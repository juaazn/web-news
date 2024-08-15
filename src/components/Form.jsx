import { useState  } from 'react'

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
    <form onSubmit={handleSubmit }>
      <label htmlFor="username">Name: </label>
      <input id="username" type="text" name='username' onChange={handleInput}/>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" name='email' onChange={handleInput} />
      <input type="submit" />
    </form>
  )
}
