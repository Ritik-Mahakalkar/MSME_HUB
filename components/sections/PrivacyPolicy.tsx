// import "@/styles/blog.css";
// import "@/styles/blog-details.css";

// const PrivacyPolicySection = () => {
//     return (
//         <div className="page-blog mt-100 mb-100">
//             <div className="container container-narrow">
//                 <div className="blog-details">
//                     <div className="card-blog-list" data-aos="fade-up">
//                         <div className="card-blog-content">
//                             <h2 className="card-blog-heading heading text-50 text-center">
//                                 Our Privacy Policy
//                             </h2>

//                             <div className="blog-description">
//                                 <p>
//                                     Welcome to MSME Hub. We are committed to protecting your personal data and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://msmehub.co.in/
//                                     (the “Website”), use our services (including business consultancy, funding solutions, government‐scheme support, etc.), or otherwise engage with us.
//                                 </p>

//                                 <p>
//                                     By accessing or using our Website or services, you agree to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not agree with the terms herein, you must refrain from using our Website or services.
//                                 </p>

//                                 <h3>Who we are?</h3>

//                                 <p>
//                                    MSME Hub is a unit of Mahalasa Growth Ventures Pvt Ltd (CIN U70200MH2024PTC430003) with its registered office at 302, Shree Vidya Enclave, Plot No. 9, S Ambazari Road, Laxminagar, Nagpur, Maharashtra 440020, India. We offer solutions and services for Micro, Small & Medium Enterprises (MSMEs) including business registration & setup, funding solutions, government schemes/subsidies consultancy, growth strategies, and global business services.
//                                 </p>

//                                 <h3>Information We Collect?</h3>
//                                 <h4>1. Information You Provide</h4>
//                                 <p>
//                                     It is a long established fact that a reader will be
//                                     distracted by the readable content of a page when looking at
//                                     its layout. The point of using Lorem Ipsum is that it has a
//                                     more-or-less normal distribution of letters, as opposed to
//                                     using 'Content here, content here', making it look like
//                                     readable English. Many desktop publishing packages and web
//                                     page editors now use Lorem Ipsum as their default model
//                                     text, and a search for 'lorem ipsum' will uncover many web
//                                     sites still in their infancy. Various versions have evolved
//                                     over the years, sometimes by accident, sometimes on purpose
//                                     (injected humour and the like).
//                                 </p>

//                                 <h3>Where does it come from?</h3>
//                                 <p>
//                                     Contrary to popular belief, Lorem Ipsum is not simply random
//                                     text. It has roots in a piece of classical Latin literature
//                                     from 45 BC, making it over 2000 years old. Richard
//                                     McClintock, a Latin professor at Hampden-Sydney College in
//                                     Virginia, looked up one of the more obscure Latin words,
//                                     consectetur, from a Lorem Ipsum passage, and going through
//                                     the cites of the word in classical literature, discovered
//                                     the undoubtable source. Lorem Ipsum comes from sections
//                                     1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
//                                     Extremes of Good and Evil) by Cicero, written in 45 BC. This
//                                     book is a treatise on the theory of ethics, very popular
//                                     during the Renaissance. The first line of Lorem Ipsum,
//                                     "Lorem ipsum dolor sit amet..", comes from a line in section
//                                     1.10.32.
//                                 </p>
//                                 <p>
//                                     The standard chunk of Lorem Ipsum used since the 1500s is
//                                     reproduced below for those interested. Sections 1.10.32 and
//                                     1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
//                                     also reproduced in their exact original form, accompanied by
//                                     English versions from the 1914 translation by H. Rackham.
//                                 </p>

//                                 <p>
//                                     Use both direct conversations and indirect observations to
//                                     get visibility into employees challenges and concerns. Use
//                                     every opportunity to make clear to employees that you
//                                     support and care them. To facilitate regular conversations
//                                     between managers and employees, provide.
//                                 </p>

//                                 <p>
//                                     The third Monday of January is supposed to be the most
//                                     depressing day of the year. Whether you believe that or not,
//                                     the long nights, cold weather, and trying to keep to new
//                                     year resolutions are all probably getting to you a little by
//                                     now. To make matters worse many will still be recovering
//                                     from their Christmas spending. So how can you make today
//                                 </p>

//                                 <p>
//                                     Vast numbers of employees now work remotely, and it's too
//                                     late to develop a set of remote-work policies if you didn't
//                                     already have one. But there are ways to make the remote-work
//                                     experience productive and engaging for employees
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PrivacyPolicySection;
import "@/styles/blog.css";
import "@/styles/blog-details.css";

const PrivacyPolicySection = () => {
  return (
    <div className="page-blog mt-100 mb-100">
      <div className="container container-narrow">
        <div className="blog-details">
          <div className="card-blog-list" data-aos="fade-up">
            <div className="card-blog-content">
              {/* <h2 className="card-blog-heading heading text-50 text-center">
                Our Privacy Policy
              </h2> */}

              <div className="blog-description">
                <p>
                  Welcome to MSME Hub. We are committed to protecting your
                  personal data and your right to privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website{" "}
                  <a href="https://msmehub.co.in/" target="_blank" rel="noopener noreferrer">
                    https://msmehub.co.in/
                  </a>{" "}
                  (the “Website”), use our services (including business
                  consultancy, funding solutions, government‐scheme support,
                  etc.), or otherwise engage with us.
                </p>

                <p>
                  By accessing or using our Website or services, you agree to the
                  collection, use and disclosure of your information in
                  accordance with this Privacy Policy. If you do not agree with
                  the terms herein, you must refrain from using our Website or
                  services.
                </p>

                <h3>Who We Are ?</h3>
                <p>
                  MSME Hub is a unit of Mahalasa Growth Ventures Pvt Ltd (CIN:
                  U70200MH2024PTC430003) with its registered office at 302, Shree Vidya Enclave,
                  Plot No. 9, S Ambazari Road, Laxminagar, Nagpur, Maharashtra 440020, India. We
                  offer solutions and services for Micro, Small & Medium Enterprises (MSMEs)
                  including business registration & setup, funding solutions, government
                  schemes/subsidies consultancy, growth strategies, and global business services.
                </p>

                <h3>Information We Collect ?</h3>
                <h4>1. Information You Provide</h4>
                <p>
                  We collect information that you voluntarily provide when you interact with us,
                  for example through contact forms, consultations, subscriptions, or direct
                  communication. This may include your name, business name, email address, phone
                  number, business registration details, GST number, PAN number, financial data,
                  or any other information required for service delivery.
                </p>

                <h4>2. Information Collected Automatically</h4>
                <p>
                  When you use our Website, certain data is collected automatically using cookies
                  and analytics tools. This may include your IP address, browser type, device
                  details, visited pages, time and date of access, and user interaction behaviour.
                  These help us enhance our Website performance and security.
                </p>

                <h3>How We Use Your Information ?</h3>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide, operate and improve our Website and services.</li>
                  <li>
                    Respond to your inquiries and deliver the services you request.
                  </li>
                  <li>
                    Personalise your experience and communicate updates or offers.
                  </li>
                  <li>
                    Analyse usage trends, detect fraud, and maintain system security.
                  </li>
                  <li>
                    Comply with legal and regulatory requirements.
                  </li>
                </ul>

                <h3>Legal Basis for Processing ?</h3>
                <p>
                  We process your data under Indian laws (Information Technology Act 2000 and
                  related Rules) on the basis of:
                </p>
                <ul>
                  <li>Your consent when you voluntarily share data with us.</li>
                  <li>Contractual necessity to perform requested services.</li>
                  <li>Legal compliance and obligations.</li>
                  <li>
                    Legitimate interests in improving and protecting our operations and users.
                  </li>
                </ul>

                <h3>How We Share Your Information ?</h3>
                <p>
                  We may share your data with trusted third parties only when necessary to
                  deliver our services or fulfil legal requirements. These may include service
                  providers, business partners, consultants, auditors, and legal authorities.
                  All such parties are bound by confidentiality and data protection obligations.
                </p>

                <h3>Cookies and Tracking Technologies ?</h3>
                <p>
                  We use cookies and similar technologies to analyse website traffic, remember
                  your preferences, and enhance usability. You can disable cookies through your
                  browser settings; however, certain features may not function properly.
                </p>

                <h3>Data Retention ?</h3>
                <p>
                  We retain your personal information only as long as necessary to fulfil the
                  purposes outlined in this Privacy Policy or as required by law. When no longer
                  needed, data is securely deleted or anonymised.
                </p>

                <h3>Data Security ?</h3>
                <p>
                  We employ reasonable technical, administrative, and physical measures to
                  safeguard your data against unauthorised access, loss, or misuse. However, no
                  online transmission is completely secure, and we cannot guarantee absolute
                  protection.
                </p>

                <h3>Your Rights and Choices ?</h3>
                <p>
                  You have the right to access, correct, or request deletion of your personal
                  data. You may also opt out of marketing communications at any time. To exercise
                  these rights, contact us at the details below.
                </p>

                <h3>Children’s Privacy ?</h3>
                <p>
                  Our Website is not intended for individuals under 18 years of age. We do not
                  knowingly collect information from minors. If you believe a child has provided
                  us with personal data, please contact us for deletion.
                </p>

                <h3>International Data Transfers ?</h3>
                <p>
                  Your information may be stored or processed outside India when required for
                  service delivery. In such cases, we ensure adequate safeguards and compliance
                  with applicable data protection laws.
                </p>

                <h3>Links to Other Websites ?</h3>
                <p>
                  Our Website may contain links to external websites. We are not responsible for
                  the privacy practices or content of those sites. Please review their policies
                  before providing any information.
                </p>

                <h3>Changes to This Policy ?</h3>
                <p>
                  We may update this Privacy Policy from time to time. The latest version will be
                  posted on this page with a revised “Last Updated” date. We encourage you to
                  check periodically for updates.
                </p>

                <h3>Contact Us ?</h3>
                <p>
                  For any questions or concerns regarding this Privacy Policy or data handling
                  practices, please contact:
                </p>
                <p>
                  <strong>Mahalasa Growth Ventures Pvt Ltd</strong>
                  <br />
                  302, Shree Vidya Enclave, Plot No. 9, S Ambazari Road, Laxminagar,
                  Nagpur, Maharashtra 440020, India
                  <br />
                  Email: <a href="mailto:info@msmehub.co.in">info@msmehub.co.in</a>
                  <br />
                  Phone: 7722021215
                </p>

                <p>
                 By using our Website or services, you acknowledge that you have read,
                  understood, and agreed to this Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
