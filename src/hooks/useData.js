import { useState } from 'react'
import { useContext } from 'react'
import { subcribeGlobalContext } from '../context/subcribeContext'
import { useNavigate } from 'react-router-dom'

export default function useData () {
  const initialState = { username: '', email: '' }
  const [data, setData] = useState({ username: '', email: '' })
  const { setSubcribe } = useContext(subcribeGlobalContext)

  const navigate = useNavigate()
  
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  
  const clearState = () => {
    setData({ ...initialState })
  }


  const checkSubcribe = () => setSubcribe(true)

  const handleSubmit  = (event) => {
    event.preventDefault()
    window.localStorage.setItem(`${data.username}`, JSON.stringify(data))
    clearState()
    navigate('/list')
    checkSubcribe()
  }

  return {
    data,
    handleInput,
    handleSubmit
  }
}
