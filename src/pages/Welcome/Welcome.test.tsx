import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Landing page', () => {

    beforeEach(() => render(<Welcome />))

    it('should display correct welcoming message', () => {
        const initialText = screen.getByText((content) => content.startsWith('Welcome, '));
        expect(initialText).toBeInTheDocument();
    })

    it('should have a link to documentation', () => {
        const linkText = screen.getByText((content) => content.includes('click'))
        expect(linkText).toContainHTML('<a href="https://google.com" target="_blank">here</a>')
    })

    it('should match snapshot', () => {
        const { container } = render(<Welcome />)

        expect(container).toMatchSnapshot();
    })

})
