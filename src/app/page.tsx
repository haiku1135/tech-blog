import Link from "next/link";
import { Footer } from "./components/Footer";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl w-full mx-auto">
      <header className="flex items-center w-full">
        <Link className="text-2xl font-bold text-white cursor-pointer hover:text-gray-400" href="/">
          haiku1135
        </Link>
      </header>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start w-full">
        <div>
          <p className="text-2xl font-bold text-gray-500">I'm a junior frontend engineer and music producer(hobby).</p>
          <Link className="hover:text-gray-400" href="/about">Read more<span>→</span></Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md flex items-center justify-center">
            <Link href="/blogs">
              <Image src="/logo-blog.svg" alt="blog" width={240} height={240} />
            </Link>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center justify-center">
            <Link href="https://github.com/haiku1135" target="_blank">
              <Image src="/github-mark.svg" alt="github" width={240} height={240} />
            </Link>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center justify-center">
            <Link href="https://x.com/haiku1135" target="_blank">
              <Image src="/logo-x.png" alt="x" width={240} height={240} />
            </Link>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center justify-center"> 
            <Link href="https://zenn.dev/haiku1135" target="_blank">
              <Image src="/logo-zenn.svg" alt="zenn" width={240} height={240} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
