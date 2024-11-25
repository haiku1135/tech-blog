import Link from 'next/link';
import { getBlogs } from '../libs/client';

export default async function Blogs() {
  console.log('SERVICE_DOMAIN:', process.env.SERVICE_DOMAIN);
  console.log('API_KEY:', process.env.API_KEY);
  const { contents } = await getBlogs();
  if(!contents) {
    return <div>ブログがありません</div>;
  }

  return (
    <>
      <div>
        <ul>
          {contents.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}