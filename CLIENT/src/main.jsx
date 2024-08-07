import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'react-bootstrap'
import { UserProvider } from './context/UserContext.jsx'
import { PropertiesProvider } from './context/PropertiesContext.jsx'
import CartProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PropertiesProvider>
    <CartProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </CartProvider>
    </PropertiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);