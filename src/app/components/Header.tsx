import Link from 'next/link';

export const Header = () => {
  return (
    <header className='max-w-4xl w-full mx-auto h-16 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-white cursor-pointer hover:text-gray-400'>
        <Link href="/">
          haiku1135
        </Link>
      </h1>
      <nav className='flex items-center gap-4'>
        <Link className='hover:text-gray-400' href="/">Home</Link>
        <Link className='hover:text-gray-400' href="/blogs">Blogs</Link>
        <Link className='hover:text-gray-400' href="/about">About</Link>
      </nav>
    </header>
  )
}