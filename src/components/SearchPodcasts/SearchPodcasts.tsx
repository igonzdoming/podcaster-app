import { memo } from 'react';
import type { SearchPodcastProps } from '@/api/types/Podcasts';
import { useLocale } from '@/hooks/useLocale';
import './SearchPodcasts.css';

const SearchPodcast = ({ onSearch, totalResults }: SearchPodcastProps) => {
  const t = useLocale();

  return (
    <div className="container-search">
      <div className="container-search-count">
        <span className="search-count">{totalResults}</span>
      </div>

      <input
        className="search"
        type="text"
        placeholder={t.components.searchPodcasts.placeHolder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default memo(SearchPodcast);
