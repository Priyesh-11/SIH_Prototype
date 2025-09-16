import React from 'react'
import Navbar from './Components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './Pages/SignInPage.jsx'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/signin' element={<SignInPage/>}/>
      </Routes>
    </div>
  )
}

export default App