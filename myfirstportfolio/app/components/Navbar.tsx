// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 w-full text-white">
      <h1 className="text-3xl">My Portfolio</h1>
      <div className="flex space-x-4">
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
        <Link href="/page3">Page 3</Link>
      </div>
    </nav>
  );
};

export default Navbar;