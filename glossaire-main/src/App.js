import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./auth/contexts/AuthContext"
import Createword from "./pages/Dashboard/Createword"
// import { HomeProvider } from "./pages/Home/Homecontext"
import Dashboard from "./pages/Dashboard/Dasdboard"
import "./auth/auth.css"
import Login from "./auth/components/Login"
import PrivateRoute from "./auth/components/PrivateRoute"
import ForgotPassword from "./auth/components/ForgotPassword"
import UpdateProfile from "./auth/components/UpdateProfile"
import Editword from "./pages/Dashboard/Editword"
// import HOME from "./pages/Home/Home"
import Translate from "./pages/Homepage/Components/Translate"
import PhraseTranslate from "./pages/Homepage/Components/PhraseTranslate"
// import App1 from "./test"
// import HomePage from "./pages/Homepage/Homepage"



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

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />


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
          <Route exact path="/"
            element={
              <Translate />
            }
          />
          <Route exact path="/Translate"
            element={
              <PhraseTranslate />
            }
          />


        </Routes>


      </AuthProvider>
    )
  );
}

export default App;



{/* <Route path="/" element={
            <HomeProvider>

               <HOME /> 
              <HomePage />
            </HomeProvider>
          } /> */}

// box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);