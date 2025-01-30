import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Grid from '../view/components/grid'

test("Renders the main page", () => {
    render(<Grid data={[]} type={'courses'} />)
    expect(true).toBeTruthy()
})