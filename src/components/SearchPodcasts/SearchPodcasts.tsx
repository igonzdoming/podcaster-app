import type { SearchPodcastProps } from '@/api/types/Podcasts';
import './SearchPodcasts.css';

const SearchPodcast = ({ onSearch, totalResults }: SearchPodcastProps) => {
  return (
    <div className="container-search">
      <div className="container-search-count">
        <span className="search-count">{totalResults}</span>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Filter podcast..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchPodcast;
