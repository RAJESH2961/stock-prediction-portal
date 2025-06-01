import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// setting up things for ROuter
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
// Auth Provider to manage Login Status based on Token status in Local storage
// Global logged in state is managed in AuthProvider context that data is enclosed in this app so that entire App can access to that data
import AuthProvider from './AuthProvider'
function App() {

  return (
    <>
    {/* Now the logges in status is accessible all the components */}
    <AuthProvider> 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
