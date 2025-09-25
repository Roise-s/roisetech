import Footer from "./Footer";

const PrivacyPolicy = () => {

    const faqsList = [
        {
            q: "Information I Collect",
            a: "I may collect the following types of information: Personal information you provide voluntarily, such as your name, email address, phone number, and any messages or content submitted through forms. Technical information automatically collected when you visit the website, including your IP address, browser type, operating system, and pages visited."
        },
        {
            q: "How I Use Your Information",
            a: "Your information is used to: Respond to inquiries and provide services you request. Send updates or information about services (if you opt in). Improve my website, services, and user experience. Comply with legal obligations."
        },
        {
            q: "Sharing Your Information",
            a: "I do not sell, rent, or trade your personal information to third parties. I may share your information with trusted service providers who help me operate the website or provide services, but only to the extent necessary. I may disclose information if required by law or to protect my rights and property."
        },
        {
            q: "Data Security",
            a: "I take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. While I strive to keep your data secure, no method of transmission or storage is completely secure."
        },
        {
            q: "Retention of Data",
            a: "I retain personal information only as long as necessary to provide services or comply with legal obligations. When no longer needed, your data will be securely deleted or anonymized."
        },
        {
            q: "Your Rights",
            a: "You have the right to: Request access to the personal information I hold about you. Request correction or deletion of your personal information. Opt-out of marketing communications at any time."
        }, 
        {
            q: "Children’s Privacy",
            a: "This website and services are not intended for children under 13. I do not knowingly collect personal information from children."
        },
        {
            q: "Updates to This Policy",
            a: "I may update this Privacy Policy from time to time. Changes will be posted on this page with the “Last updated” date."
        },
        {
            q: "Contact Me",
            a: "If you have questions or concerns about this Privacy Policy or how your data is handled, you can contact me at milkeyroise@gmail.com"
        },        
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-300 font-semibold">
                    Privacy Policy
                </h1>
                <p className="text-gray-400 mx-auto text-lg">
                    Roise Tech values your privacy. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website or use my services. By using this website, you agree to the terms described here.
                </p>
            </div>
            <div className="mt-14 mb-36 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div 
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-300 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </section>
    )
}

export default PrivacyPolicy;