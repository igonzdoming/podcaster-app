import { memo, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { useAppContext } from '@/context';
import { formatDateMMDDYYYY } from '../../utils/formatDates';
import { formatDuration } from '../../utils/formatTimes';
import type { ListEpisodesProps } from '../../api/types/Episodes';
import './DetailEpisodes.css';

const DetailEpisodes = ({
  podcastDetail,
  podcastCount,
  podCastId,
  episodeId,
}: ListEpisodesProps) => {
  const t = useLocale();
  const { setStatusIcon } = useAppContext();
  const isEpisodeDetail = Boolean(episodeId);

  const selectedEpisode = useMemo(() => {
    if (!episodeId) return null;
    return podcastDetail.find(
      (episode) => episode.trackId === Number(episodeId)
    );
  }, [podcastDetail, episodeId]);

  useEffect(() => {
    if (!isEpisodeDetail) return;

    setStatusIcon({
      type: 'info',
      duration: 2000,
    });
  }, [isEpisodeDetail, setStatusIcon]);

  const tableRows = useMemo(() => {
    return podcastDetail.map((episode, index) => (
      <tr
        key={episode.trackId}
        className={`list-detail-episodes-table-track-row ${
          index % 2 === 0 ? 'row-even' : 'row-odd'
        }`}
      >
        <td>
          <Link
            to={`/podcast/${podCastId}/episode/${episode.trackId}`}
            aria-label={`Abrir episodio ${episode.trackName}`}
          >
            {episode.trackName}
          </Link>
        </td>

        <td>{formatDateMMDDYYYY(episode.releaseDate)}</td>

        <td className="bordered">{formatDuration(episode.duration)}</td>
      </tr>
    ));
  }, [podcastDetail, podCastId]);

  return (
    <div
      className="list-detail-episodes-table-container"
      role="region"
      aria-labelledby="episodes-title"
    >
      {!isEpisodeDetail ? (
        <>
          <h2 id="episodes-title" className="list-detail-episodes-header">
            {t.components.detailEpisodes.episodes}: {podcastCount}
          </h2>

          <div className="list-detail-episodes-table-container-items">
            <table
              className="list-detail-episodes-table"
              aria-label="Lista de episodios del podcast"
            >
              <thead>
                <tr>
                  {t.components.detailEpisodes.table.columns.map(
                    (column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className={
                          index === 0
                            ? 'list-detail-episodes-table-main-column'
                            : 'list-detail-episodes-table-bordered'
                        }
                      >
                        {column}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>{tableRows}</tbody>
            </table>
          </div>
        </>
      ) : (
        selectedEpisode && (
          <div className="list-detail-episodes-table-container-items margin-episodes">
            <Link
              to={`/podcast/${podCastId}`}
              aria-label="Volver a la lista de episodios"
            >
              <div className="title-detail-episode">
                <h2>{selectedEpisode.trackName}</h2>
              </div>
            </Link>

            {selectedEpisode.description && (
              <div
                className="content-detail-episode"
                aria-label="Descripción del episodio"
                dangerouslySetInnerHTML={{
                  __html: selectedEpisode.description,
                }}
              />
            )}

            {selectedEpisode.previewUrl && (
              <div className="player-detail-episode">
                <audio
                  controls
                  preload="none"
                  aria-label={`Reproductor de audio del episodio ${selectedEpisode.trackName}`}
                >
                  <source src={selectedEpisode.previewUrl} type="audio/mpeg" />
                </audio>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default memo(DetailEpisodes);
