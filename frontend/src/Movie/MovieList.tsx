import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

export default function MovieData() {
    const [movieData, setMovieData] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
            setMovieData(temp);
        };
        fetchMovie();
    }, []);
    const sortedMovieData = movieData.sort((a, b) =>
        a.title.localeCompare(b.title),
    );
    return (
        <>
            <div className='row'>
            <h4 className='mb-5'>Joel's favorite movies through an API!</h4>
      </div >
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Rating</th>
                    <th>Edited</th>
                    <th>LentTo</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {sortedMovieData.map((f) => (
                    <tr key={f.movieId}>
                        <td>{f.title}</td>
                        <td>{f.category}</td>
                        <td>{f.year}</td>
                        <td>{f.director}</td>
                        <td>{f.rating}</td>
                        <td>{f.edited}</td>
                        <td>{f.lentTo}</td>
                        <td>{f.notes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  );
}