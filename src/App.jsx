import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostContextProvider } from './context/PostContext'
import Home from './pages/Home'


function App() {
  return (
    <PostContextProvider>
      <Routes>
      
        <Route path='/:id' element={<Home/>}/>
      </Routes>
    </PostContextProvider>

  )
}

export default App