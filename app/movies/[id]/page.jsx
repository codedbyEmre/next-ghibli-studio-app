import { notFound } from 'next/navigation';

const getMovie = async id => {
  const res = await fetch('https://ghibliapi.vercel.app/films/' + id, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export default async function MovieDetails({ params }) {
  const { id } = params;

  const movie = await getMovie(id);

  const {
    movie_banner,
    title,
    original_title,
    original_title_romanised,
    release_date,
    rt_score,
    running_time,
    director,
    producer,
    description
  } = movie;

  return (
    <div
      className="min-h-[55vh] p-6 text-white overflow-hidden rounded-md movie-details-card relative"
      style={{
        backgroundImage: `url(${movie_banner})`,
        backgroundRepeat: 'none',
        objectFit: 'fill',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative">
        <h2 className="text-2xl mb-2">{title}</h2>
        <h3 className="mb-1">{original_title}</h3>
        <h3 className="mb-2">{original_title_romanised}</h3>
        <div className="flex items-center gap-4 mb-4">
          <span>{release_date}</span>
          <span>{running_time} mins</span>
          <span>{rt_score}</span>
        </div>
        <div>
          Directors: <span className="font-medium ml-1">{director}</span>
        </div>
        <div className="mt-1">
          Producers: <span className="font-medium ml-1">{producer}</span>
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-medium mb-1">Description</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
