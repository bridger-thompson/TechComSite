import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/custom.scss";

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
