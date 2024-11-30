import { getDetail,getBlogs } from "../../libs/client";
import Link from "next/link"
import { Header } from "../../components/Header";
import Image from "next/image";
export async function generateStaticParams(){
  const { contents } = await getBlogs();

  const paths = contents.map((blog)=>{
    return {
      blogid: blog.id,
    };
  });
  return paths;
}

export default async function StaticDetailPage({
  params : { blogid },
}: {
  params: { blogid : string};
}) {
  const blog = await getDetail(blogid);
  console.log("blog------>", blog);
  return(
    <>
      <Header />
      <span style={{display: "block", width: "1px", height: "2rem", flexShrink: 0}}></span>
      <div className="h-screen w-full pt-5">
        <div className="content">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
            }}
          />
          {blog.thunbnal && (
            <Image src={blog.thunbnal.url} alt={blog.title} width={blog.thunbnal.width} height={blog.thunbnal.height} />
          )}
        </div>
      </div>
    </>
  )
}

