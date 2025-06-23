import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Mainlayout from './layout/Mainlayout.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainlayout />} >
      
      </Route>
    </Routes>
  </BrowserRouter>
)
