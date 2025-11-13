// import type { Metadata } from 'next';
// import BreadcrumbBanner from "@/components/BreadcrumbBanner";
// import BreadcrumbBannerImage from '@/public/img/banner/blog-banner.avif';
// import BreadcrumbBannerImageTablet from '@/public/img/banner/blog-banner.avif';
// import BreadcrumbBannerImageMobile from '@/public/img/banner/blog-banner.avif';
// import Posts from '@/data/posts.json';
// import BlogDetails from '@/components/sections/BlogDetails';
// import { ArticleType } from '@/types/article';
// import { notFound } from 'next/navigation';

// const PAGE_TITLE: string = 'Blog Details';

// export const metadata: Metadata = {
//   title: PAGE_TITLE,
// }

// const Page = async ({ params }: {params: Promise<{slug: string}>}) => {
//     const { slug } = await params;
//     const posts = Posts;
//     const article: ArticleType | undefined = posts.find((post: ArticleType) => post.slug === slug);

//     return (
//         <>
//             <BreadcrumbBanner 
//                 title={PAGE_TITLE}
//                 image={{
//                     src: BreadcrumbBannerImage.src,
//                     srcMobile: BreadcrumbBannerImageTablet.src,
//                     srcTablet: BreadcrumbBannerImageMobile.src,
//                     width: 1920,
//                     height: 520,
//                     cls: "media media-bg",
//                     alt: "Banner Image",
//                     loading: "eager"
//                 }}
//             />
//             {article ? (
//               <BlogDetails container="container" article={article} />
//             ) : (
//               notFound()
//             )}
//         </>
//     )
// }

// export default Page;


// import type { Metadata } from 'next';
// import BreadcrumbBanner from "@/components/BreadcrumbBanner";
// import BreadcrumbBannerImage from '@/public/img/banner/blog-banner.avif';
// import BreadcrumbBannerImageTablet from '@/public/img/banner/blog-banner.avif';
// import BreadcrumbBannerImageMobile from '@/public/img/banner/blog-banner.avif';
// import Posts from '@/data/posts.json';
// import BlogDetails from '@/components/sections/BlogDetails';
// import { ArticleType } from '@/types/article';
// import { notFound } from 'next/navigation';

// const PAGE_TITLE: string = 'Blog Details';

// export const metadata: Metadata = {
//   title: PAGE_TITLE,
// }

// const Page = async ({ params }: {params: Promise<{slug: string}>}) => {
//     const { slug } = await params;
//     const posts = Posts;
//     const article: ArticleType | undefined = posts.find((post: ArticleType) => post.slug === slug);

//     return (
//         <>
//             <BreadcrumbBanner 
//                 title={PAGE_TITLE}
//                 image={{
//                     src: BreadcrumbBannerImage.src,
//                     srcMobile: BreadcrumbBannerImageTablet.src,
//                     srcTablet: BreadcrumbBannerImageMobile.src,
//                     width: 1920,
//                     height: 520,
//                     cls: "media media-bg",
//                     alt: "Banner Image",
//                     loading: "eager"
//                 }}
//             />
//             {article ? (
//               <BlogDetails container="container" article={article} />
//             ) : (
//               notFound()
//             )}
//         </>
//     )
// }

// export default Page;

import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BreadcrumbBannerImage from '@/public/img/banner/blog-banner.avif';
import BreadcrumbBannerImageTablet from '@/public/img/banner/blog-banner.avif';
import BreadcrumbBannerImageMobile from '@/public/img/banner/blog-banner.avif';
import Posts from '@/data/posts.json';
import BlogDetails from '@/components/sections/BlogDetails';
import { ArticleType } from '@/types/article';
import { notFound } from 'next/navigation';

const PAGE_TITLE = 'Blog Details';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article: ArticleType | undefined = Posts.find(
    (post: ArticleType) => post.slug === slug
  );

  return {
    title: article ? article.title : PAGE_TITLE,
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  
  const { slug } = await params;

  const article: ArticleType | undefined = Posts.find(
    (post: ArticleType) => post.slug === slug
  );

  if (!article) return notFound();

  return (
    <>
    
      <BreadcrumbBanner
        title={article.title}
        image={{
          src: BreadcrumbBannerImage.src,
          srcMobile: BreadcrumbBannerImageTablet.src,
          srcTablet: BreadcrumbBannerImageMobile.src,
          width: 1920,
          height: 520,
          cls: "media media-bg",
          alt: "Banner Image",
          loading: "eager",
        }}
      />

      
      <BlogDetails container="container" article={article} />
    </>
  );
};

export default Page;
