import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { useAuth } from './context/AuthContext.jsx'
import RoutesComponent from './routes/Routes.jsx'
import HeaderComponent from './components/OthersComponents/HeaderComponent.jsx';
import SidebarComponent from './components/OthersComponents/SidebarComponent.jsx';

import './App.css'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <ThemeProvider>
        <Router>
          {isAuthenticated ? (
            <div className='grid-container'>
              <HeaderComponent />
              <SidebarComponent />
              <RoutesComponent />
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
