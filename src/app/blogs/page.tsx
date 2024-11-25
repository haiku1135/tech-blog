import Link from 'next/link';
import { getBlogs } from '../libs/client';

export default async function Blogs() {
  console.log('SERVICE_DOMAIN:', process.env.SERVICE_DOMAIN);
  console.log('API_KEY:', process.env.API_KEY);
  const { contents } = await getBlogs();
  if(!contents) {
    return <h1 className="text-2xl font-bold text-center mt-20">Noブログがありません</h1>;
  }

  return (
    <>
      <div>
        <ul>
          {contents.map((blog) => (
            <li key={blog.id} className='p-5 rounded shadow-lg content flex justify-between items-center'>
              <h4 className='text-2xl font-bold'>{blog.title}</h4>
              <Link href={`/blogs/${blog.id}`}>
                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition'>詳細を見る</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}