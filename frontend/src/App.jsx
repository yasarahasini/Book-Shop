
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';



function App() {

  return (
    <>
      <AuthProvider>
        <Navbar/>
        <main className='min-h-screen max-w-screen-2xl mx-auto px-10 py-6 font-primary'>
          <Outlet/>
        </main>
        <Footer/>
      </AuthProvider>
      
    </>
  ) 
}

export default App
