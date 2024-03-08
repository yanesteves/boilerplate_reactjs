import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import SigninPage from '../pages/SigninPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import HomePage from '../pages/HomePage.jsx';

export default function RoutesComponent() {

    const { isAuthenticated } = useAuth()

    const loginRedirect = (children) => {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }

        return children
    }

    return (
        // isAuthenticated
        <Routes>
            <Route path='/signin' element={
                loginRedirect(<SigninPage />)
            } />
            <Route path='/signup' element={
                loginRedirect(<SignupPage />)
            } />

            {isAuthenticated ? (
                <>
                    <Route path='/' exact Component={HomePage} />
                    <Route path='/home' Component={HomePage} />
                </>
            ) : (
                <Route path='*' element={<Navigate replace to='/signin' />} />
            )}

            {/* /nao-existente */}
            {/* <Route path='*' Component={App} /> */}
        </Routes>
    )
} 