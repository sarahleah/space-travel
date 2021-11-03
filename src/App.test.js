import { render, screen } from '@testing-library/react';
import Destinations from './Components/Pages/Destinations';
import Home from './Components/Pages/Home';

test('renders Home screen', () => {
  render(<Home />);
  const navElement = screen.getByText(/explore/i);
  expect(navElement).toBeInTheDocument();
});

test('renders Destination screen', () => {
  render(<Destinations />)
  const planet = screen.getByText(/pick your destination/i);
  expect(planet).toBeInTheDocument();
})
