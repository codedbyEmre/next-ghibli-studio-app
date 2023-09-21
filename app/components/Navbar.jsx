'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed w-full bg-blue-700 text-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-semibold text-2xl uppercase tracking-wider">
          Next Ghibli
        </Link>
        <ul className="flex items-center font-medium gap-4">
          <Link className={pathname === '/' ? 'active-link ' : ''} href="/">
            Home
          </Link>
          <Link className={pathname === '/movies' ? 'active-link ' : ''} href="/movies">
            Movies
          </Link>
        </ul>
      </div>
    </div>
  );
}
