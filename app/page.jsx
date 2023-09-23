import Link from 'next/link';

export default function page() {
  return (
    <main className="text-xl h-[60vh] flex flex-col items-center justify-center px-6">
      <h2 className="text-6xl font-semibold mb-10">Your Magical Corner</h2>
      <p>
        Embark on an enchanting journey where each Ghibli Studio movie is a gem waiting to be discovered. Prepare your
        eyes for the visual feast that awaits you.
      </p>
      <p className="my-4">
        Sail through the myriad of remarkable characters that inhabit the mesmerizing Ghibli universe. The more you
        explore, the more you’ll fall in love.
      </p>
      <Link
        href="/movies"
        className="mt-12 bg-blue-600 hover:bg-blue-800 text-white rounded p-2 px-4 font-medium transition-colors duration-300"
      >
        Explore Movies
      </Link>
    </main>
  );
}
