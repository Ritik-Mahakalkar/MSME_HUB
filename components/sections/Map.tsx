"use client";

import "@/styles/google-map.css";

const MapSection = () => {
    return (
        <div className="google-map">
            <div className="iframe-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6805010606918!2d79.05808417430893!3d21.125300284457627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f8d8bc0f6488b5%3A0x3b1b0c4e8e739e41!2sMSME%20Hub!5e0!3m2!1sen!2sin!4v1762505982942!5m2!1sen!2sin"
                    title="Google map"
                    width="1920"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
      </div>
    )
}

export default MapSection;