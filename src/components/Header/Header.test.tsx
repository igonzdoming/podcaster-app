import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('hacer click sobre el título de Podcaster y redirigir a la Home', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', {
      name: 'Podcaster',
    });

    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', '/');
  });
});
