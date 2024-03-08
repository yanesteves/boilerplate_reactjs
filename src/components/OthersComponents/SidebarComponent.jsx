import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
function SidebarComponent() {

    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/signin')    
    }

    return (
        <div className="sidebar">
            <nav style={{ 'display': 'flex', 'flexDirection': 'column'}}>
                <NavLink>Home</NavLink>
                <NavLink>Link 2</NavLink>
                <NavLink>Link 3</NavLink>
                <NavLink>Link 4</NavLink>
            </nav>

            <button onClick={handleLogout} className="baseline-sidebar-text">Logout</button>
        </div>
    )
}

export default SidebarComponent