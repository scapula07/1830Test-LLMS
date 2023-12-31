import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import {RecoilRoot} from "recoil"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RecoilRoot>
        < Router >
            <App /> 
      </Router>
   </RecoilRoot>
  </React.StrictMode>,
)
