import './ListPodcasts.css';
import { Link } from 'react-router-dom';
import type { PodcastProps } from '@/api/types/Podcasts';

const ListPodcasts = ({ podcasts }: PodcastProps) => {
  return (
    <>
      <div className="list-podcasts-container">
        {podcasts.map((podcast, index) => (
          <Link to={`/podcast/${podcast.id}`}>
            <div className="list-podcasts" key={index}>
              <div className="list-podcasts-image">
                <img src={podcast.img} alt="avatar" />
              </div>
              <h3 className="list-podcasts-title">
                {podcast.title.toUpperCase()}
              </h3>
              <p className="list-podcasts-description">
                Author:{podcast.artist}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListPodcasts;
