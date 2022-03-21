
import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./auth/contexts/AuthContext"
import Createword from "./pages/Dashboard/Createword"

import Dashboard from "./pages/Dashboard/Dasdboard"
import "./auth/auth.css"
import Login from "./auth/components/Login"
import PrivateRoute from "./auth/components/PrivateRoute"
import ForgotPassword from "./auth/components/ForgotPassword"
import UpdateProfile from "./auth/components/UpdateProfile"
import Editword from "./pages/Dashboard/Editword"


import HOME from "./pages/Home/HOME"


function App() {


  return (
    (
      <AuthProvider>


        <Routes>
          <Route exact path="/admin"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/admin/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          {/* <Route path="/admin/signup" element={<Signup />} /> */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<HOME />} />

          <Route path="/admin/edit" element={
            <PrivateRoute>
              < Editword />
            </PrivateRoute>
          } />
          <Route path="/admin/create" element={
            <PrivateRoute>
              <Createword />
            </PrivateRoute>
          } />
        </Routes>

      </AuthProvider>
    )
  );
}

export default App;
