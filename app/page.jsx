import Link from 'next/link';

export default function page() {
  return (
    <main className="home text-xl h-[100vh] flex items-center justify-center px-6 ">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-600 opacity-[0.76]"></div>

      <div className="relative text-white text-center">
        <div className="container text-2xl">
          <h2 className="text-7xl font-semibold mb-16 text-center">Your Magical Corner</h2>
          <p className="text-left">
            Embark on an enchanting journey where each Ghibli Studio movie is a gem waiting to be discovered. Prepare
            your eyes for the visual feast that awaits you.
          </p>
          <p className="mt-4 text-left mb-16">
            Sail through the myriad of remarkable characters that inhabit the mesmerizing Ghibli universe. The more you
            explore, the more you’ll fall in love.
          </p>
          <Link
            href="/movies"
            className="bg-white text-blue-800 hover:text-white hover:bg-blue-800 rounded p-3 px-4 font-medium transition-colors duration-300 text-xl"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </main>
  );
}
