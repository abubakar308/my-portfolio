import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Mainlayout from './layout/Mainlayout.jsx';
import Home from './pages/Home.jsx';
import Aboutme from './pages/Aboutme.jsx';
import Projects from './pages/Projects.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainlayout />} >
      <Route index element={<Home />} />
      <Route path='aboutme' element={<Aboutme />} />
      <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
