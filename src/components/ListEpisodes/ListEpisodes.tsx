import { Link } from 'react-router-dom';
import { formatDateMMDDYYYY } from '@/utils/formatDates';
import type { ListEpisodesProps } from '@/api/types/Episodes';
import './ListEpisodes.css';

const ROW_COLORS = ['#F9F9F9', '#fff'];

const ListEpisodes = ({
  podcastDetail,
  podcastCount,
  podCastId,
}: ListEpisodesProps) => {
  return (
    <div className="list-episodes-table-container">
      <div className="list-episodes-header">Episodes: {podcastCount}</div>
      <div className="list-episodes-table-container-items">
        <table className="list-episodes-table">
          <thead>
            <tr>
              <th className="list-episodes-table-main-column">Title</th>
              <th className="list-episodes-table-bordered">Date</th>
              <th className="list-episodes-table-bordered">Duration</th>
            </tr>
          </thead>

          <tbody>
            {podcastDetail.map((track, index) => {
              const backgroundColor =
                index % 2 === 0 ? ROW_COLORS[0] : ROW_COLORS[1];

              return (
                <tr
                  key={track.trackId}
                  style={{ backgroundColor }}
                  className="list-episodes-table-track-row"
                >
                  <td className=" ">
                    <Link to={`/podcast/${podCastId}/episode/${track.trackId}`}>
                      {track.trackName}
                    </Link>
                  </td>
                  <td>{formatDateMMDDYYYY(track.releaseDate)}</td>
                  <td className="bordered">
                    {Math.floor((track.duration ?? 0) / 60000)}:
                    {String(
                      Math.floor(((track.duration ?? 0) % 60000) / 1000)
                    ).padStart(2, '0')}
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEpisodes;
