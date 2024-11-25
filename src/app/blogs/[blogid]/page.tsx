import { getDetail,getBlogs } from "../../libs/client";
import Link from "next/link"

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
    <div className="h-screen pt-5">
      <div className="content">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </div>
    </div>
    </>
  )
}

