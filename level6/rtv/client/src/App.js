import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import ProtectedRoute from './components/ProtectedRoute.js'

import Auth from './pages/Auth.js'
import Profile from './pages/Profile.js'
import Public from './pages/Public.js'

import './css/profile.css'
import './css/issue.css'
import './css/publicissue.css'
import './css/styles.css'


import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout, user } = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar logout={logout}/>}

      <Routes>

        <Route 
          path="/" 
          element={ token ? <Navigate to="/profile"/> : <Auth />}
        />

        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>
          }
        />

        <Route 
          path="/public"
          element={<ProtectedRoute token={token} redirectTo="/">
          <Public />
        </ProtectedRoute>
        }
        />

      </Routes>
    </div>
  )
}