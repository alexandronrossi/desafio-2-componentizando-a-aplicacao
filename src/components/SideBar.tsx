import { Button } from '../components/Button';

import { useGenres } from '../hooks/useGenres';

import '../styles/sidebar.scss';

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useGenres();

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}