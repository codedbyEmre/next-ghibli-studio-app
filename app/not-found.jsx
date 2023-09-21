import Link from 'next/link';

export default function () {
  return (
    <main className="text-center">
      <h2 className="text-4xl font-medium">Something went wrong :(</h2>
      <p className="mt-4 text-xl">
        Go back to the
        <Link href="/" className="ml-1 font-semibold underline">
          Home
        </Link>
      </p>
    </main>
  );
}
