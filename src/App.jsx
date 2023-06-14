import { useState } from 'react'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Layout from './Layout/main'
import Home from "./pages/Home"
import Registration from './pages/Register'
import Login from './pages/Login'
import ErrorBoundary from './ErrorBoundary'
import NotFound from './pages/ErrorPage/NotFound'
import AuthGuard from './AuthGuard'
import {QueryClient,QueryClientProvider} from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
    <Routes>
        <Route exact path="/home"  element={ 
          <AuthGuard>
              <Home />
          </AuthGuard>
           } />
        <Route exact path="/register"  element={ <Registration />} />
        <Route exact path="/"  element={ <Login />} />
        <Route exact path="*" element={<NotFound />} />
    </Routes>
    </ErrorBoundary>
    </QueryClientProvider>
   
 
  )
}

export default App
