import '@/styles/team-details.css';
import type { Metadata } from 'next';
import Image, { StaticImageData } from "next/image";
import BreadcrumbBannerImage from '@/public/img/banner/profile1.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/profile3.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/profile2.jpg';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import TeamMemberDetails from '@/components/sections/TeamMemberDetails';

import { ProfileType } from '@/types/profile';
import profile from '@/public/img/team/profile.jpg'
import ProfileDetails from '@/components/sections/ProfileDetails';

const PAGE_TITLE: string = 'Profile';

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

const Page = async () => {
  // ✅ Static owner profile data
  const ownerProfile: ProfileType = {
    id: 1,
    name: "Samir Bakre",
    designation: " MSME expert & his experience in the industry",
    image: profile, // ✅ add your image in /public/img/team/
    expertise: "CA Samir Bakre is a distinguished Chartered Accountant with over 25 years of post-qualification experience, renowned for his expertise in project finance, strategic planning, and innovative financial solutions. As the Founding Partner of B P S D & Associates, Chartered Accountants, he has advised a wide spectrum of reputed organizations, including major hospitals in Nagpur, infrastructure firms, manufacturing enterprises, real estate developers, and more. His leadership has facilitated the syndication of over ₹1500 crore in fund and non-fund-based financing, driving growth across diverse sectors.",
    biography: `
     
      <p> With a global perspective, Samir has coordinated international joint ventures, working with clients in countries such as Singapore, Dubai, South Africa, New Zealand, Malaysia, Indonesia, Hong Kong, and China. His innovative approach to financing and policy-making has made him a trusted advisor to management teams across industries.
      A former Chairman of the Nagpur Branch of The Institute of Chartered Accountants of India (ICAI) in 2008-09, Samir led the branch to win the prestigious “Best Branch” award on an all-India basis for both members and students, as well as at the Western India Regional Council (WIRC). His tenure was marked by pioneering initiatives, including joint programs with trade and professional bodies on critical topics like Union and State Budgets.</p><br/>

      <p> Beyond his professional accomplishments, Samir is deeply engaged in public service and economic discourse. He serves as the State General Secretary of Udyog Aghaadi, BJP Maharashtra, and as a BJP Spokesperson for Maharashtra. He has contributed to shaping economic policy as a key member of the committee that drafted the “Vision Document for Maharashtra” for the 2014 and 2019 assembly elections under Hon’ble Shri. Devendraji Fadnavis. A regular speaker at forums like ICAI, Vidarbha Industries Association (VIA), and various MBA colleges, he shares insights on project finance, taxation, bank audits, and more.
      Academically, Samir excelled early on, securing 2nd place in the HSSC Commerce Stream and B.Com examinations at Nagpur University, and 48th All-India rank in the ICWAI Final Exam. He passed all CA exams and the Information Systems Audit (DISA) exam on his first attempt, earning a National Merit Scholarship from the Government of Maharashtra.
      CA Samir Bakre’s commitment extends to social causes through his association with Maitri Parivar and past membership in the Rotary Club of Nagpur (West). With a blend of technical mastery, strategic vision, and a passion for progress, CA Samir Bakre continues to leave a lasting impact on the financial and socio-economic landscape.</p>
    `,
    year_of_expertise: "25",
    phone: "+91 98765 43210",
    email: "info@msmehub.co.in",
    social: {
      facebook_url: "https://www.facebook.com/",
      linkedin_url: "https://www.linkedin.com/",
      twitter_url: "https://twitter.com/",
      instagram_url: "https://www.instagram.com/",
    },
    
  };

  return (
    <>
      {/* ✅ Breadcrumb Banner */}
      <BreadcrumbBanner
        title={PAGE_TITLE}
        image={{
          src: BreadcrumbBannerImage.src,
          srcMobile: BreadcrumbBannerImageMobile.src,
          srcTablet: BreadcrumbBannerImageTablet.src,
          width: 1920,
          height: 520,
          cls: "media media-bg",
          alt: "Profile Banner",
          loading: "eager"
        }}
      />

      {/* ✅ TeamMemberDetails reused for static owner data */}
      <ProfileDetails container="container" data={ownerProfile} />
    </>
  );
};

export default Page;
