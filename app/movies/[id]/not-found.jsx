import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <main className="text-center">
        <h2 className="text-5xl font-medium mb-4">404</h2>
        <p className="text-xl">Could not find the movie you were looking for.</p>
        <p className="mt-2 text-xl">
          Go back to all
          <Link href="/movies" className="font-semibold underline underline-offset-2 ml-1">
            movies
          </Link>
        </p>
      </main>
    </div>
  );
}
