import BackButton from '@/app/components/shared/BackButton';
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
    <div className="sm:pt-20 pt-32">
      <div className="container">
        <div className="mt-4 mb-6 w-[6.5rem]">
          <BackButton />
        </div>
        <div
          className="min-h-[45vh] p-6 text-white overflow-hidden rounded-md movie-details-card relative"
          style={{
            backgroundImage: `url(${movie_banner})`,
            backgroundRepeat: 'none',
            objectFit: 'fill',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-700 opacity-[0.68]"></div>

          <div className="relative text-lg">
            <h2 className="text-3xl font-semibold mb-3">{title}</h2>
            <h3 className="mb-1">{original_title}</h3>
            <h3 className="mb-2">{original_title_romanised}</h3>
            <div className="flex items-center gap-4 mb-4">
              <p>
                Year: <span className="font-semibold">{release_date}</span>
              </p>
              <p>
                <span className="font-semibold">{running_time}</span> mins
              </p>
              <p>
                Score: <span className="font-semibold">{rt_score}</span>
              </p>
            </div>
            <div>
              Directors: <span className="font-semibold ml-1">{director}</span>
            </div>
            <div className="mt-1">
              Producers: <span className="font-semibold ml-1">{producer}</span>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold mb-1">Description</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
