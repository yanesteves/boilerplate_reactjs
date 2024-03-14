/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import ProfileElement from '../components/OthersComponents/ProfileElement.jsx'

describe('ProfileElement', () => {
    test('Teste1', () => {
        render(<ProfileElement profissao="Lorem Ipsum" />)        
        expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    })
})