import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './router/Home'
import Form from './router/Form'
import List from './router/List'
import { ArticleData } from './context/globalState'
import { SusbcribeGlobalContext } from './context/subcribeContext'
import './layout.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/form',
    element: <Form />
  },
  {
    path: '/list',
    element: <List />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticleData>
      <SusbcribeGlobalContext>
        <RouterProvider router={router} basename="/web-news" />
      </SusbcribeGlobalContext>
    </ArticleData >
  </React.StrictMode>,
)
