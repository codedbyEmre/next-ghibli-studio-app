import Link from 'next/link';

export default function Movie({ movie }) {
  const { id, image, title, original_title, original_title_romanised, release_date, rt_score, running_time } = movie;

  return (
    <div className="movie-card">
      <div className="flex-1">
        <img src={image} alt={title} width="100%" className="h-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1 p-4 pb-6">
        <div className="flex flex-col items-start h-full justify-between">
          <div>
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <p className="mb-2">
              Original Title: <span className="font-semibold">{original_title}</span>
            </p>
            <p className="mb-2">
              Romanised Title: <span className="font-semibold">{original_title_romanised}</span>
            </p>
            <p className="mb-2">
              Release Date: <span className="font-semibold">{release_date}</span>
            </p>
            <p className="mb-2">
              Running Time: <span className="font-semibold">{running_time} mins</span>
            </p>
            <p>
              Score: <span className="font-semibold">{rt_score}</span>
            </p>
          </div>
          <Link
            href={`/movies/${id}`}
            className="bg-blue-600 text-white rounded text-sm p-2 font-medium mt-6 hover:bg-blue-800 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
