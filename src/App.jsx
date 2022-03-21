import { useState } from 'react'

import Home from './pages/home/home.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import './App.scss'
import Sidebar from './components/sidebar/sidebar.component'

function App() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='app'>
      <Header showSidebar={() => showSidebar()}/>
      <Home/>
      <Footer/>
      <Sidebar sidebar={sidebar} showSidebar={() => showSidebar()}/>
    </div>
  )
}

export default App
