import data from './MovieData.json';
import { Link } from 'react-router-dom';

const MovieDataSet = data.MovieData;

function MovieList() {
  return (
    <>
      <div className="mt-1 mb-2">
        <Link to="/" className="btn btn-secondary">
          Return Home
        </Link>
      </div>
      <div>
        <h2>Joel Hilton's Movie Collection</h2>
      </div>
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MovieDataSet.map((m) => (
              <tr key={m.Title}>
                <td className="text-center">{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td className={m.Rating === 'R' ? 'text-danger' : ''}>
                  {m.Rating}
                </td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
