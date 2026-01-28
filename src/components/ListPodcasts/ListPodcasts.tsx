import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import './ListPodcasts.css';
import type { PodcastProps } from '@/api/types/Podcasts';

const ListPodcasts = ({ podcasts }: PodcastProps) => {
  const t = useLocale();

  return (
    <div className="list-podcasts-container">
      {podcasts.map((podcast) => (
        <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
          <div className="list-podcasts">
            <div className="list-podcasts-image">
              <img
                src={podcast.img}
                alt={podcast.title}
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="list-podcasts-title">
              {podcast.title.toUpperCase()}
            </h3>

            <p className="list-podcasts-description">
              {t.components.listPodcasts.author}: {podcast.artist}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default memo(ListPodcasts);
