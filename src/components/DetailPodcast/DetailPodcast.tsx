import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import './DetailPodcast.css';
import type { PodcastDetailProps } from '@/api/types/Podcasts';

const DetailPodcast = ({ podcast }: PodcastDetailProps) => {
  const t = useLocale();

  return (
    <div className="detail-podcast-container">
      <Link to={`/podcast/${podcast.id}`}>
        <div className="detail-podcast-container-card-image">
          <img
            src={podcast.img}
            alt={podcast.title}
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      <div className="detail-podcast-container-divider" />

      <div className="detail-podcast-container__content">
        <strong>{podcast.artist}</strong>
        <span>
          {t.components.detailPodcast.by} {podcast.artist}
        </span>
      </div>

      <div className="detail-podcast-container-divider" />

      <div className="detail-podcast-container__content">
        <p>{t.components.detailPodcast.description}:</p>
        <span>{podcast.description}</span>
      </div>
    </div>
  );
};

export default memo(DetailPodcast);
