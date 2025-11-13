// import '@/styles/blog.css';
// import '@/styles/blog-details.css';
// import { ArticleType } from '@/types/article';
// import Article from "../Article";
// import Comments from "../Comments";
// import CommentForm from "../CommentForm";
// import BlogSidebar from "../BlogSidebar";
// import Share from '../Share';
// import Icons from '../Icons';
// import Link from 'next/link';
// import { createHandle } from '@/utils/createHandle';
// import DrawerOpener from '../DrawerOpener';

// interface BlogDetailsType {
//     container: string;
//     article: ArticleType;
// }

// const BlogDetails = ({
//     container,
//     article
// }: BlogDetailsType) => {
//     const { tags }: { tags: string[] } = article;

//     return (
//         <div className="page-blog-details mt-100 mb-100">
//             <div className={container}>
//                 <DrawerOpener
//                     cls="open-sidebar svg-wrapper text text-20 fw-500 lg:!hidden"
//                     data-drawer=".drawer-blog-sidebar"
//                     data-aos="fade-up"
//                 >
//                     <Icons.Filter />
//                     Filter
//                 </DrawerOpener>
//                 <div className="grid grid-cols-12 lg:gap-1">
//                     <div className="col-span-12 lg:col-span-7">
//                         <Article article={article} />

//                         {/* <div className="blog-share" data-aos="fade-up">
//                             {tags.length > 0 && 
//                                 <div className="blog-share-item">
//                                     <h2 className="label heading text-16 fw-500">Tags:</h2>
//                                     <ul className="sidebar-tags list-unstyled">
//                                         {tags.map((tag, index) => (
//                                             <li key={`tag-${index}`}>
//                                                 <Link
//                                                     className="subheading subheading-bg text-18"
//                                                     href={`/blogs/tags/${createHandle(tag)}`}
//                                                     aria-label={tag}
//                                                 >
//                                                     {tag}
//                                                 </Link>
//                                             </li>
//                                         ))}                                            
//                                     </ul>
//                                 </div>
//                             }

//                             <div className="blog-share-item">
//                                 <h2 className="label heading text-16 fw-500">Share:</h2>
//                                 <Share title={article.title} />
//                             </div>
//                         </div> */}

//                         {/* <Comments />
//                         <CommentForm /> */}
//                     </div>

//                     <div className="col-span-12 lg:col-span-5">
//                         <BlogSidebar slug={article.slug} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BlogDetails;



// import '@/styles/blog.css';
// import '@/styles/blog-details.css';
// import { ArticleType } from '@/types/article';
// import Article from "../Article";
// import Comments from "../Comments";
// import CommentForm from "../CommentForm";
// import BlogSidebar from "../BlogSidebar";
// import Share from '../Share';
// import Icons from '../Icons';
// import Link from 'next/link';
// import { createHandle } from '@/utils/createHandle';
// import DrawerOpener from '../DrawerOpener';

// interface BlogDetailsType {
//     container: string;
//     article: ArticleType;
// }

// const BlogDetails = ({
//     container,
//     article
// }: BlogDetailsType) => {
//     const { tags }: { tags: string[] } = article;

//     return (
//         <div className="page-blog-details mt-100 mb-100">
//             <div className={container}>
//                 <DrawerOpener
//                     cls="open-sidebar svg-wrapper text text-20 fw-500 lg:!hidden"
//                     data-drawer=".drawer-blog-sidebar"
//                     data-aos="fade-up"
//                 >
//                     <Icons.Filter />
//                     Filter
//                 </DrawerOpener>

//                 {/* ✅ Two-column layout with custom width distribution */}
//                 <div className="grid grid-cols-12 lg:gap-1">
//                     {/* ✅ Main content takes 70% */}
//                     <div
//                         className="col-span-12 lg:col-span-8"
//                         style={{ width: "100%", float: "left" }}
//                     >
//                         <Article article={article} />
//                     </div>

//                     {/* ✅ Sidebar takes 30% */}
//                     <div
//                         className="col-span-12 lg:col-span-4"
//                         style={{ width: "100%", float: "right" }}
//                     >
//                         <BlogSidebar slug={article.slug} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BlogDetails;



import '@/styles/blog.css';
import '@/styles/blog-details.css';
import { ArticleType } from '@/types/article';
import Article from "../Article";
import Comments from "../Comments";
import CommentForm from "../CommentForm";
import BlogSidebar from "../BlogSidebar";
import Icons from '../Icons';
import DrawerOpener from '../DrawerOpener';

interface BlogDetailsType {
    container: string;
    article: ArticleType;
}

const BlogDetails = ({
    container,
    article
}: BlogDetailsType) => {
    const { tags }: { tags: string[] } = article;

    return (
        <div className="page-blog-details mt-100 mb-100">
            <div className={container}>
                {/* ✅ Drawer toggle for mobile */}
                <DrawerOpener
                    cls="open-sidebar svg-wrapper text text-20 fw-500 lg:!hidden"
                    data-drawer=".drawer-blog-sidebar"
                    data-aos="fade-up"
                >
                    <Icons.Filter />
                    Filter
                </DrawerOpener>

                {/* ✅ Flex layout for 70/30 division */}
                <div
                    className="grid grid-cols-12 lg:gap-1"
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                    }}
                >
                    {/* ✅ Main content area - 70% */}
                    <div
                        className="col-span-12 lg:col-span-8"
                        style={{
                            flex: "0 0 70%",
                            maxWidth: "70%",
                            paddingRight: "2%",
                        }}
                    >
                        <Article article={article} />

                        {/* Uncomment these if needed later */}
                        {/* <Comments />
                        <CommentForm /> */}
                    </div>

                    {/* ✅ Sidebar - 30% width and sticky */}
                    <div
                        className="col-span-12 lg:col-span-4"
                        style={{
                            flex: "0 0 30%",
                            maxWidth: "30%",
                            position: "sticky",
                            top: "100px", // Adjust for header height
                            alignSelf: "flex-start",
                            height: "fit-content",
                        }}
                    >
                        <BlogSidebar slug={article.slug} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
