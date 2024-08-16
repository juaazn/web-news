import { useState } from 'react'

export default function useData () {
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
    window.localStorage.setItem(`${data.username}`, JSON.stringify(data))
    clearState()
  }

  return {
    data,
    handleInput,
    handleSubmit
  }
}
