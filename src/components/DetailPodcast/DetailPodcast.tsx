import { Link } from 'react-router-dom';
import './DetailPodcast.css';
import type { PodcastDetailProps } from '@/api/types/Podcasts';

const DetailPodcast = ({ podcast }: PodcastDetailProps) => {
  return (
    <div className="detail-podcast-container">
      <Link to={`/podcast/${podcast.id}`}>
        <div className="detail-podcast-container-card-image">
          <img src={podcast.img} alt={podcast.title} />
        </div>
      </Link>

      <div className="detail-podcast-container-divider" />

      <div className="detail-podcast-container__content">
        <strong>{podcast.artist}</strong>
        <span>by {podcast.artist}</span>
      </div>

      <div className="detail-podcast-container-divider" />

      <div className="detail-podcast-container__content">
        <p>Description:</p>
        <span>{podcast.description}</span>
      </div>
    </div>
  );
};

export default DetailPodcast;
