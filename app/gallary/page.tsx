import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/gallary.avif';
import BreadcrumbBannerImageTablet from '@/public/img/banner/gallary.avif';
import BreadcrumbBannerImageMobile from '@/public/img/banner/gallary.avif';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";

import Gallary from '@/components/sections/Gallary';


const PAGE_TITLE: string = 'Our Gallary';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const gallary = () => {
    return(
        <>
            {/* Breadcrumb Banner */}
            <BreadcrumbBanner 
                title={PAGE_TITLE}
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImage.src,
                    srcTablet: BreadcrumbBannerImage.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "Banner Image",
                    loading: "eager"
                }}
            />

            {/* Project Cards */}
            <Gallary
                wrapperCls="mt-100 mb-100"
                container="container-fluid"
            />
        </>
    )
}

export default gallary;