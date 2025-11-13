// import { HeroSlidesData } from '@/data/sections/heroSliderData';
// import { ImageTextData } from '@/data/sections/imageTextData';
// import { ScrollingTextData } from '@/data/sections/scrollingTextData';
// import { OurServicesData } from '@/data/sections/ourServicesData';
// import { RecentProjectData } from '@/data/sections/recentProjectData';
// import { WhyChooseUsData } from '@/data/sections/whyChooseUsData';
// import { TeamSliderData } from '@/data/sections/teamSliderData';
// import { TestimonialData } from '@/data/sections/testimonialData';
// import { FeaturedBlogGridData } from '@/data/sections/featuredBlogGridData';

// import HeroSlider from '@/components/sections/HeroSlider';
// import ImageText from '@/components/sections/ImageText';
// import ScrollingText from '@/components/sections/ScrollingText';
// import OurServices from '@/components/sections/OurServices';
// import RecentProject from '@/components/sections/RecentProject';
// import WhyChooseUs from '@/components/sections/WhyChooseUs';
// import TeamSlider from '@/components/sections/TeamSlider';
// import Testimonials from '@/components/sections/Testimonials';
// import FeaturedBlogGrid from '@/components/sections/FeaturedBlogGrid';


// const Home = () => {
//   return (
//     <>
//       {/* Hero Slider */}
//       <HeroSlider 
//         wrapperCls="with-floating-header"
//         slides={HeroSlidesData} 
//         navigation={true} 
//       />

//       {/* Image Text */}
//       <ImageText data={ImageTextData} />

//       {/* Scrolling Text */}
//       <ScrollingText data={ScrollingTextData} />

//       {/* Service Section */}
//       <OurServices data={OurServicesData} />

//       {/* Recent Projects */}
//       <RecentProject data={RecentProjectData} />

//       {/* Why Choose Us */}
//       <WhyChooseUs data={WhyChooseUsData} />

//       {/* Our Team */}
//       <TeamSlider 
//         data={TeamSliderData} 
//         pagination={true}
//       />

//       {/* Testimonials */}
//       <Testimonials data={TestimonialData} />

//       {/* Featured Blog */}
//       <FeaturedBlogGrid data={FeaturedBlogGridData} />
//     </>
//   );
// }

// export default Home;



import { BannerWithSliderData } from '@/data/sections/bannerWithSliderData';
import { ImageText2Data } from '@/data/sections/imageText2Data';
import { OurServicesDataAccordion } from '@/data/sections/ourServicesDataAccordion';
import { FeaturedProjectData } from '@/data/sections/featuredProjectData';
import { WhyChooseUsGridData } from '@/data/sections/whyChooseUsGridData';
import { PricingPlanData } from '@/data/sections/pricingPlanData';
import { FaqData } from '@/data/sections/faqData';
import { TestimonialSliderThumbData } from '@/data/sections/testimonialSliderThumbData';
import { FeaturedBlogData } from '@/data/sections/featuredBlogData';

import BannerWithSlider from "@/components/sections/BannerWithSlider";
import ImageText2 from '@/components/sections/ImageText2';
import OurServicesAccordion from '@/components/sections/OurServicesAccordion';
import ProjectSlider from '@/components/sections/ProjectSlider';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import PricingPlan from '@/components/sections/PricingPlan';
import TestimonialSliderWithThumb from '@/components/sections/TestimonialSliderWithThumb';
import Faq from '@/components/sections/Faq';
import FeaturedBlog from '@/components/sections/FeaturedBlog';
import { TextBannerData } from '@/data/sections/textBannerData';
import TextBanner from '@/components/sections/TextBanner';


const Home = () => {
    return(
        <>
            {/* Banner Slider */}
            <BannerWithSlider data={BannerWithSliderData} />

            {/* Image Text */}
            <ImageText2 data={ImageText2Data} />

            {/* Service Section */}
            <OurServicesAccordion data={OurServicesDataAccordion} />

            {/* Recent Projects */}
            <ProjectSlider data={FeaturedProjectData} />

            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridData} /><br/><br/><br/><br/>

            {/* Pricing Plan */}
            {/* <PricingPlan data={PricingPlanData} /> */}

             {/* Text Banner */}
            <TextBanner data={TextBannerData} />

            {/* Testimonial Slider with Thumb */}
            {/* <TestimonialSliderWithThumb data={TestimonialSliderThumbData} /> */}

            {/* FAQ */}
            <Faq data={FaqData} />

            {/* Featured Blog */}
            <FeaturedBlog data={FeaturedBlogData} />
        </>
    )
}

export default Home;
