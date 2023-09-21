// imports
import notFound from '../not-found';
import Movie from './Movie';

const getMovies = async () => {
  const res = await fetch('https://ghibliapi.vercel.app/films', {
    next: {
      revalidate: 30
    }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export default async function MovieList() {
  const movies = await getMovies();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {movies && movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
    </div>
  );
}
