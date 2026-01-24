import { Link } from 'react-router-dom';
import { formatDateMMDDYYYY } from '../../utils/formatDates';
import type { ListEpisodesProps } from '../../api/types/Episodes';
import './DetailEpisodes.css';
import { formatDuration } from '../../utils/formatTimes';

const ROW_COLORS = ['#F9F9F9', '#fff'];

const DetailEpisodes = ({
  podcastDetail,
  podcastCount,
  podCastId,
  episodeId,
}: ListEpisodesProps) => {
  const isEpisodeDetail = Boolean(episodeId);

  const filteredPodcast = podcastDetail.find(
    (pod) => pod.trackId === Number(episodeId)
  );

  return (
    <div
      className="list-episodes-table-container"
      role="region"
      aria-labelledby="episodes-title"
    >
      {!isEpisodeDetail ? (
        <>
          <h2 id="episodes-title" className="list-episodes-header">
            Episodes: {podcastCount}
          </h2>

          <div className="list-episodes-table-container-items">
            <table
              className="list-episodes-table"
              aria-label="Lista de episodios del podcast"
            >
              <thead>
                <tr>
                  <th scope="col" className="list-episodes-table-main-column">
                    Title
                  </th>
                  <th scope="col" className="list-episodes-table-bordered">
                    Date
                  </th>
                  <th scope="col" className="list-episodes-table-bordered">
                    Duration
                  </th>
                </tr>
              </thead>

              <tbody>
                {podcastDetail.map((track, index) => (
                  <tr
                    key={track.trackId}
                    className="list-episodes-table-track-row"
                    style={{
                      backgroundColor: ROW_COLORS[index % ROW_COLORS.length],
                    }}
                  >
                    <td>
                      <Link
                        to={`/podcast/${podCastId}/episode/${track.trackId}`}
                        aria-label={`Abrir episodio ${track.trackName}`}
                      >
                        {track.trackName}
                      </Link>
                    </td>

                    <td>{formatDateMMDDYYYY(track.releaseDate)}</td>

                    <td className="bordered">
                      {formatDuration(track.duration)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        filteredPodcast && (
          <div className="list-episodes-table-container-items margin-episodes">
            <Link
              to={`/podcast/${podCastId}`}
              aria-label="Volver a la lista de episodios"
            >
              <div className="title-detail-episode">
                <h2>{filteredPodcast.trackName}</h2>
              </div>
            </Link>

            {filteredPodcast.description && (
              <div
                className="content-detail-episode"
                aria-label="Descripción del episodio"
                dangerouslySetInnerHTML={{
                  __html: filteredPodcast.description,
                }}
              />
            )}
            {filteredPodcast.previewUrl && (
              <div className="player-detail-episode">
                <audio
                  controls
                  preload="none"
                  aria-label={`Reproductor de audio del episodio ${filteredPodcast.trackName}`}
                >
                  <source src={filteredPodcast.previewUrl} type="audio/mpeg" />
                </audio>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default DetailEpisodes;
