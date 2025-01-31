import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Grid from '../view/components/grid'

test("Renders the grid component", () => {
    const data = [{
        id: 1,
        title: "teste",
    }]

    render(<BrowserRouter>
                <Grid data={data} type={'courses'} />
            </BrowserRouter>)
    expect(screen.getByText("teste")).toBeInTheDocument()
})
