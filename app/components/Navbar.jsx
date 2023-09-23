'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo.png';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed w-full bg-blue-700 text-white border-b-blue-900 border-b-4 z-10">
      <div className="container flex sm:flex-row flex-col items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={Logo} width={50} alt="Ghibli logo" quality={100} placeholder="blur" loading="lazy" />
          <h2 className="font-semibold sm:text-xl text-2xl capitalize ml-1">Next Ghibli</h2>
        </Link>
        <div className="flex items-center font-medium gap-4 sm:mt-0 mt-4 sm:text-base text-lg">
          <Link className={pathname === '/' ? 'active-link ' : ''} href="/">
            Home
          </Link>
          <Link className={pathname === '/movies' ? 'active-link ' : ''} href="/movies">
            Movies
          </Link>
        </div>
      </div>
    </div>
  );
}
