import { useState } from 'react'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Layout from './Layout/main'
import Home from "./pages/Home"
import Registration from './pages/Register'
import Login from './pages/Login'
import ErrorBoundary from './ErrorBoundary'
import ErrorPage from './pages/ErrorPage'
import AuthGuard from './AuthGuard'

function App() {


  return (
    <ErrorBoundary>
    <Routes>
        <Route exact path="/home"  element={ 
          <AuthGuard>
              <Home />
          </AuthGuard>
           } />
        <Route exact path="/"  element={ <Registration />} />
        <Route exact path="/signin"  element={ <Login />} />
        <Route exact path="*" element={<ErrorPage />} />
    </Routes>
    </ErrorBoundary>
   
 
  )
}

export default App
