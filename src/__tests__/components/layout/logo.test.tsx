import Logo from '@/components/layout/logo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Logo', () => {
  it('renders the Logo component with name', () => {
    render(<Logo />);
    
    const nameElement = screen.getByText('Mehdi Akbarzadeh');
    expect(nameElement).toBeInTheDocument();
  });
});