// import type { Metadata } from 'next';
// import BreadcrumbBannerImage from '@/public/img/banner/services.avif';
// import BreadcrumbBannerImageTablet from '@/public/img/banner/services.avif';
// import BreadcrumbBannerImageMobile from '@/public/img/banner/services.avif';
// import ServiceList from '@/data/services.json';
// import { ServiceProps } from '@/types/service';
// import { notFound } from 'next/navigation';

// import BreadcrumbBanner from "@/components/BreadcrumbBanner";
// import ServiceDetails from '@/components/sections/ServiceDetails';

// const PAGE_TITLE: string = 'Service Details';
// export const metadata: Metadata = {
//   title: PAGE_TITLE,
// }

// const Page = async ({ params }: {params: Promise<{slug: string}>}) => {
//     const { slug } = await params;
//     const serviceList = ServiceList;

//     const service: ServiceProps | undefined = serviceList.find(
//         (service: ServiceProps) => service.slug === slug
//     );

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
//             {service ? (
//               <ServiceDetails container="container" data={service} />
//             ) : (
//               notFound()
//             )}
//         </>
//     )
// }

// export default Page;


import type { Metadata } from 'next';
 import BreadcrumbBannerImage from '@/public/img/banner/services.avif'; 
 import BreadcrumbBannerImageTablet from '@/public/img/banner/services.avif';
  import BreadcrumbBannerImageMobile from '@/public/img/banner/services.avif';
   import ServiceList from '@/data/services.json'; import { ServiceProps } from '@/types/service'; 
   import { notFound } from 'next/navigation'; import BreadcrumbBanner from "@/components/BreadcrumbBanner"; 
   import ServiceDetails from '@/components/sections/ServiceDetails'; 
   const Page = async ({ params }: { params: Promise<{ slug: string }> }) => { const { slug } = await params; const serviceList = ServiceList;
    const service: ServiceProps | undefined = serviceList.find( (service: ServiceProps) => service.slug === slug );
     if (!service) { notFound();  } const PAGE_TITLE = service.title || 'Service Details';
     return ( 
     <> 
     <BreadcrumbBanner 
      title={PAGE_TITLE}
      image={{ src: BreadcrumbBannerImage.src,
         srcMobile: BreadcrumbBannerImageTablet.src, 
         srcTablet: BreadcrumbBannerImageMobile.src, 
         width: 1920, 
         height: 520,
          cls: "media media-bg", 
          alt: "Banner Image", 
          loading: "eager",
         }} /> 
         <ServiceDetails container="container" data={service} /> 
         </> 
         ); }; 
     export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> { const service = ServiceList.find((s) => s.slug === params.slug); 
      return { title: service?.title || 'Service Details', 
      description: service?.description || '', }; } 
     export default Page; 