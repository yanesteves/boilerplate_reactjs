/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SigninPage from '../pages/SigninPage.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'

describe('SigninPage', () => {
    test('Teste1', () => {
        render(
            <Router>
                <AuthProvider>
                    <SigninPage />
                </AuthProvider>                
            </Router>
        )        
        expect(screen.getByText('Signin')).toBeInTheDocument()
    })
})