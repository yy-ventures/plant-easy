import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

// COMPONENTS
import Home from './pages/home/home.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Faq from './pages/faq/faq.component';
// import ScrollToTop from './components/scrollToTop';

import './App.scss'
import Sidebar from './components/sidebar/sidebar.component'

function App() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='app'>
      <Header showSidebar={() => showSidebar()}/>
      <Routes>
        {/* <ScrollToTop/> */}
        <Route path='/' element={<Home/>} />
        <Route path='/faq' element={<Faq/>} />
      </Routes>
      <Footer/>
      <Sidebar sidebar={sidebar} showSidebar={() => showSidebar()}/>
    </div>
  )
}

export default App
