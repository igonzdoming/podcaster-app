import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SearchPodcast from './SearchPodcasts.tsx';

describe('SearchPodcast', () => {
  it('mostrar el total de resultados al buscar', () => {
    render(<SearchPodcast totalResults={50} onSearch={vi.fn()} />);

    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('renderiza el input con el placeholder correcto', () => {
    render(<SearchPodcast totalResults={0} onSearch={vi.fn()} />);

    expect(screen.getByPlaceholderText(/filter podcast/i)).toBeInTheDocument();
  });

  it('ejecutar la función onSearch cuando el usuario escribe', async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchPodcast totalResults={0} onSearch={onSearch} />);

    const input = screen.getByRole('textbox');

    await user.type(input, 'react');

    expect(onSearch).toHaveBeenCalled();
    expect(onSearch).toHaveBeenLastCalledWith('react');
  });
});
