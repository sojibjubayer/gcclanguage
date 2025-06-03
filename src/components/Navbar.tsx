
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Learn Alphabet', href: '/learn-alphabet' },
];

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className="flex justify-between px-4 bg-[#E3EAFF] h-10 items-center">
      <Link href="/" className="font-bold">GCC-LC</Link>
      <div className="flex gap-10">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>
      <Link href="/login" className="hover:underline">Login</Link>
    </div>
  );
};

export default Navbar;
