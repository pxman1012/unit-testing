import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('should have text', () => {
        render(<Home />)    // arrange

        const myElement = screen.getByText('Save and see your changes instantly.')    // action

        expect(myElement).toBeInTheDocument()   //assert
    })
    
    it('should contain the text "Examples"', () => {
        render(<Home />)    // arrange

        const myElement = screen.getByText(/Examples/i)    // action

        expect(myElement).toBeInTheDocument()   //assert
    })

    // it('renders a heading', () => {
    //     render(<Home />)
    //     const heading = screen.getByRole('heading', {
    //         name: /welcome to next\.js!/i,
    //     })
    //     expect(heading).toBeInTheDocument()
    // })

    // it('renders the Next.js logo', () => {
    //     render(<Home />)
    //     const logo = screen.getByAltText('Next.js logo')
    //     expect(logo).toBeInTheDocument()
    // })
})