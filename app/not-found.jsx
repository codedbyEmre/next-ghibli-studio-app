import Link from 'next/link';

export default function () {
  return (
    <main className="text-center sm:pt-32 pt-40">
      <h2 className="sm:text-4xl text-2xl font-medium">Something went wrong :(</h2>
      <p className="mt-4 sm:text-xl text-base">
        Go back to the
        <Link href="/" className="ml-1 font-semibold underline">
          Home
        </Link>
      </p>
    </main>
  );
}
