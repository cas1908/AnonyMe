import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import  React from 'react'
import Error from './components/Error'
import Home from './components/Home'
import Users from './components/Users'
import User from './components/User'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorPage from './components/ErrorPage'

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter >
         <main>
             <Routes>
                <Route path='/' title='-Home' element={<Home />}>
                    <Route path='users' element={<Users />} />
                </Route>
                 
                 <Route path='/user' title='- Users' element={<User />} />
                 <Route path='*' element={<ErrorPage />} />
             </Routes>
         </main> 
      </BrowserRouter>
    </ErrorBoundary>
      
    
  )
}
