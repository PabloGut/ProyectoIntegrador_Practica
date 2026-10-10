import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import CartContextProvider from './components/Context/CartContext.jsx'
createRoot(document.getElementById('root')).render(<CartContextProvider><BrowserRouter><App /></BrowserRouter></CartContextProvider>)
