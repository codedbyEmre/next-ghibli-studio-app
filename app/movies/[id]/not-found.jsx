import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <main className="text-center sm:pt-32 pt-40">
        <h2 className="text-4xl font-medium mb-4">404</h2>
        <p className="sm:text-xl text-base">Could not find the movie you were looking for.</p>
        <p className="mt-2 sm:text-xl text-base">
          Go back to all
          <Link href="/movies" className="font-semibold underline underline-offset-2 ml-1">
            movies
          </Link>
        </p>
      </main>
    </div>
  );
}
