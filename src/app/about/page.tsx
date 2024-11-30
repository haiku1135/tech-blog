import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <span className="block w-full h-16"></span>
      <main className="max-w-4xl w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-500">About</h1>
        <div className="mt-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-gray-500">About me</h2>
              <p>WEB制作会社でフロントエンドエンジニアとして働いているhaiku1135です。</p>
              <p>個人開発で<Link href="https://resound-dev-one.vercel.app/" target="_blank" className="text-gray-400">Resound</Link>という音楽日記アプリを作っています。</p>
              <p>趣味で音楽制作をしています。</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-gray-500">Skills</h2>
              <p>HTML, CSS, JavaScript, TypeScript, React, Next.js, jQuery, Node.js, Tailwind CSS, Python, PHP, Git</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
};