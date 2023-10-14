import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from '@/components/ui/toaster'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='949635241718-0qudmklc1b9ts3e4i8ldcui54l12hmuk.apps.googleusercontent.com'>
      <App />
      {/* <ToastContainer /> */}
      <Toaster />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
