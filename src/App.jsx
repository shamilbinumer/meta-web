import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Index from './Componant/Index/Index'
// import Contact from './Componant/ContactPage/Contact'
import AboutPage from './Componant/AboutPage/AboutPage'
import ServiceCunsult from './Componant/ServicePage/ServiceCunsult'
import Gallery from './Componant/Gallery/Gallery'
import Contact from './Componant/ContactPage/Contact'
import { useEffect, useState } from 'react'
import Preloader from './Componant/Preloader/Preloader.jsx'
import CareerPage from './Componant/CareerPage/CareerPage.jsx'
import Employee from './Componant/Employee/Employee.jsx'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
<>
<>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Index} />
            <Route path='/contact' Component={Contact} />
            <Route path='/aboutPage' Component={AboutPage} />
            <Route path='/service' Component={ServiceCunsult} />
            <Route path='/gallery' Component={Gallery} />
            <Route path='/career' Component={CareerPage} />
            <Route path='/employee' Component={Employee}/>
          </Routes>
        </BrowserRouter>
      )}
    </>

    </>
  )
}

export default App