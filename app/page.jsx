import Link from 'next/link';

export default function page() {
  return (
    <main className="home text-xl min-h-[100vh] flex items-center justify-center px-6 sm:pt-0 pt-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-600 opacity-[0.76]"></div>

      <div className="relative text-white text-center">
        <div className="container sm:text-2xl text-xl">
          <h2 className="sm:text-7xl text-5xl font-semibold sm:mb-16 mb-8 text-center">Your Magical Corner</h2>
          <p className="text-left">
            Embark on an enchanting journey where each Ghibli Studio movie is a gem waiting to be discovered. Prepare
            your eyes for the visual feast that awaits you.
          </p>
          <p className="mt-4 text-left sm:mb-16 mb-8">
            Sail through the myriad of remarkable characters that inhabit the mesmerizing Ghibli universe. The more you
            explore, the more you’ll fall in love.
          </p>
          <Link
            href="/movies"
            className="bg-white text-blue-800 hover:text-white hover:bg-blue-800 rounded p-3 px-4 font-medium transition-colors duration-300 sm:text-xl text-base"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </main>
  );
}
