import LatestPosts from "@/app/components/latest-posts";
import Image from "next/image";
import md from 'markdown-it';
import { getBlogData, getBlogsData } from "@/app/utils/data";
import BlogBanner from "@/app/components/BlogBanner";
import '../../styles/blog.css';


const Page = async ({ params }) => {
    const { frontmatter, content } = await getBlogData(params.slug);
    const posts = await getBlogsData(params.slug);
    
    return (
      <section className="bg-[#E2FFFA] bg-opacity-25 pb-40">
        <BlogBanner frontmatter={frontmatter} />
        <div className="custom-container mx-auto lg:pt-60">
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} className="text-xl max-w91.8rem] m-auto blog__content max-w-[91.8rem] text-justify"/>
          <div className="flex items-start gap-5 max-w-[91.8rem] m-auto">
              <Image
                    width={92}
                    height={92}
                    className="rounded-full min-w-[9.2rem] w-[9.2rem] h-[9.2rem] object-cover"
                    alt={ frontmatter.speaker_name }
                    src={`http://localhost:3000/assets${frontmatter.speaker_image}`}
                  />
                  <div>
                    <span className="text-[1.6rem] text-[#5C5C5C]">About Author</span>
                    <h6 className="text-[1.6rem] font-semibold text-[#1B1B1B] mt-5 mb-8">{frontmatter.speaker_name}</h6>
                    <p className="text-[1.6rem] text-[#5C5C5C]">{frontmatter.speaker_info}</p>
                  </div>
          </div>
        </div>
          
        <LatestPosts blogPage={true} posts={posts} displayFilter={false} />
        </section>
      );
  }
  
  export default Page;