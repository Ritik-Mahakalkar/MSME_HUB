// import { SectionProps } from "@/types/sectionProps";
// import { FaqAccordion } from "@/data/faqAccordion";
// import Subheading from "../Subheading";
// import Heading from "../Heading";
// import Text from "../Text";
// import FaqForm from "../FaqForm";
// import Accordion from "../Accordion";


// const FaqWithContactForm = ({ data }: { data: SectionProps }) => {
//     const {        
//         wrapperCls,
//         container,
//         subheading,
//         heading,
//         text
//     } = data || {};

//     return (
//         <div className={`faq ${wrapperCls}`}>
//             <div className={container}>
//                 <div className="grid grid-cols-2 lg:gap-1">
//                     <div className="lg:col-span-1 col-span-2">
//                         <div className="section-headings">
//                             {subheading && 
//                                 <Subheading 
//                                     title={subheading}
//                                     cls="text-20"
//                                     aos="fade-up"
//                                 />
//                             }

//                             {heading && 
//                                 <Heading 
//                                     title={heading}
//                                     cls="text-50"
//                                     aos="fade-up"
//                                     aosDelay="50"
//                                 />
//                             }

//                             {text && 
//                                 <Text 
//                                     text={text}
//                                     cls="text-16"
//                                     aos="fade-up"
//                                     aosDelay="80"
//                                 />
//                             }

//                             <FaqForm heading="Have any Question" />
//                         </div>
//                     </div>

//                     <div className="lg:col-span-1 col-span-2">
//                         <Accordion data={FaqAccordion} />
//                     </div>
//                 </div>
//             </div>
//       </div>
//     )
// }

// export default FaqWithContactForm;


// import { SectionProps } from "@/types/sectionProps";
// import { FaqAccordion } from "@/data/faqAccordion";
// import Subheading from "../Subheading";
// import Heading from "../Heading";
// import Text from "../Text";
// import FaqForm from "../FaqForm";
// import Accordion from "../Accordion";

// const FaqWithContactForm = ({ data }: { data: SectionProps }) => {
//   const {
//     wrapperCls,
//     container,
//     subheading,
//     heading,
//     text
//   } = data || {};

//   return (
//     <div className={`faq ${wrapperCls}`}>
//       <div className={container}>
//         <div className="grid grid-cols-2 lg:gap-1">
//           {/* Left side — Fixed (Sticky) Form Section */}
//           <div className="lg:col-span-1 col-span-2">
//             <div className="section-headings lg:sticky top-2">
//               {subheading && (
//                 <Subheading
//                   title={subheading}
//                   cls="text-20"
//                   aos="fade-up"
//                 />
//               )}

//               {heading && (
//                 <Heading
//                   title={heading}
//                   cls="text-50"
//                   aos="fade-up"
//                   aosDelay="50"
//                 />
//               )}

//               {text && (
//                 <Text
//                   text={text}
//                   cls="text-16"
//                   aos="fade-up"
//                   aosDelay="80"
//                 />
//               )}

//               <FaqForm heading="Have any Question" />
//             </div>
//           </div>

//           {/* Right side — Scrollable Accordion */}
//           <div className="lg:col-span-1 col-span-2 ">
//             <div className="max-h-[120vh] overflow-y-auto pr-1 top-4">
//               <Accordion data={FaqAccordion} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqWithContactForm;


// import { SectionProps } from "@/types/sectionProps";
// import { FaqAccordion } from "@/data/faqAccordion";
// import Subheading from "../Subheading";
// import Heading from "../Heading";
// import Text from "../Text";
// import FaqForm from "../FaqForm";
// import Accordion from "../Accordion";

// const FaqWithContactForm = ({ data }: { data: SectionProps }) => {
//   const {
//     wrapperCls,
//     container,
//     subheading,
//     heading,
//     text
//   } = data || {};

//   return (
//     <div className={`faq ${wrapperCls}`}>
//       <div className={container}>
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-1">
//           {/* Left side — Sticky only on desktop */}
//           <div className="lg:col-span-1 col-span-2">
//             <div className="section-headings lg:sticky lg:top-0">
//               {subheading && (
//                 <Subheading
//                   title={subheading}
//                   cls="text-20"
//                   aos="fade-up"
//                 />
//               )}

//               {heading && (
//                 <Heading
//                   title={heading}
//                   cls="text-50"
//                   aos="fade-up"
//                   aosDelay="50"
//                 />
//               )}

//               {text && (
//                 <Text
//                   text={text}
//                   cls="text-16"
//                   aos="fade-up"
//                   aosDelay="80"
//                 />
//               )}

//               <FaqForm heading="Have any Question" />
//             </div>
//           </div>

//           {/* Right side — Scrollable only on desktop */}
//           <div className="lg:col-span-1 col-span-2">
//             <div className="lg:max-h-[120vh] lg:overflow-y-auto pr-1">
//               <Accordion data={FaqAccordion} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqWithContactForm;


// import { SectionProps } from "@/types/sectionProps";
// import { FaqAccordion } from "@/data/faqAccordion";
// import Subheading from "../Subheading";
// import Heading from "../Heading";
// import Text from "../Text";
// import FaqForm from "../FaqForm";
// import Accordion from "../Accordion";

// const FaqWithContactForm = ({ data }: { data: SectionProps }) => {
//   const { wrapperCls, container, subheading, heading, text } = data || {};

//   return (
//     <div className={`faq ${wrapperCls}`}>
//       <div className={container}>
//         <div
//           className="grid grid-cols-1 lg:grid-cols-2 lg:gap-1"
//           style={{
//             display: "flex",
//             flexWrap: "nowrap",
//             alignItems: "flex-start",
//           }}
//         >
//           {/* Left sticky */}
//           <div
//             style={{
//               flex: "0 0 50%",
//               maxWidth: "50%",
//               position: "sticky",
//               top: "100px",
//               alignSelf: "flex-start",
//               height: "fit-content",
//             }}
//           >
//             <div className="section-headings">
//               {subheading && <Subheading title={subheading} cls="text-20" aos="fade-up" />}
//               {heading && <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />}
//               {text && <Text text={text} cls="text-16" aos="fade-up" aosDelay="80" />}
//               <FaqForm heading="Have any Question" />
//             </div>
//           </div>

//           {/* Right scrollable naturally */}
//           <div
//             style={{
//               flex: "0 0 50%",
//               maxWidth: "50%",
//             }}
//           >
//             <Accordion data={FaqAccordion} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqWithContactForm;


import { SectionProps } from "@/types/sectionProps";
import { FaqAccordion } from "@/data/faqAccordion";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Text from "../Text";
import FaqForm from "../FaqForm";
import Accordion from "../Accordion";

const FaqWithContactForm = ({ data }: { data: SectionProps }) => {
  const { wrapperCls, container, subheading, heading, text } = data || {};

  return (
    <div className={`faq ${wrapperCls}`}>
      <div className={container}>

        {/* -------- Desktop Layout -------- */}
        <div className="hidden lg:flex">
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "flex-start",
            }}
          >
            {/* Left sticky */}
            <div
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
                position: "sticky",
                top: "100px",
                alignSelf: "flex-start",
                height: "fit-content",
              }}
            >
              <div className="section-headings">
                {subheading && <Subheading title={subheading} cls="text-20" aos="fade-up" />}
                {heading && <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />}
                {text && <Text text={text} cls="text-16" aos="fade-up" aosDelay="80" />}
                <FaqForm heading="Have any Question" />
              </div>
            </div>

            {/* Right scrollable */}
            <div
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
              }}
            >
              <Accordion data={FaqAccordion} />
            </div>
          </div>
        </div>

        {/* -------- Tablet & Mobile Layout -------- */}
        <div className="flex flex-col lg:hidden gap-8">
          {/* Left column */}
          <div>
            <div className="section-headings">
              {subheading && <Subheading title={subheading} cls="text-20" aos="fade-up" />}
              {heading && <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />}
              {text && <Text text={text} cls="text-16" aos="fade-up" aosDelay="80" />}
              <FaqForm heading="Have any Question" />
            </div>
          </div>

          {/* Right column */}
          <div>
            <Accordion data={FaqAccordion} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FaqWithContactForm;

