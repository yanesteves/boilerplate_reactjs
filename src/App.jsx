import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { useAuth } from './context/AuthContext.jsx'
import RoutesComponent from './routes/Routes.jsx'
import HeaderComponent from './components/OthersComponents/HeaderComponent.jsx';
import SidebarComponent from './components/OthersComponents/SidebarComponent.jsx';

import './App.css'
import HomePage from './pages/HomePage.jsx';

function App() {
  // const { isAuthenticated } = useAuth()
  const isAuthenticated = true;

  return (
    <>
      <ThemeProvider>
        <Router>
          {isAuthenticated ? (
            <div className='grid-container'>
              <HeaderComponent />
              <SidebarComponent />
              {/* <RoutesComponent /> */}
              <HomePage />
            </div>
          ) : (
            <RoutesComponent />
          )}
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
