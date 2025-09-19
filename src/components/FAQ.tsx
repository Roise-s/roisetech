const FAQ = () => {
  return (
    <>
     {/* FAQ */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-neutral-200">
            Frequently Asked Questions
            </h2>
        </div>
        {/* End Title */}

        <div className="max-w-5xl mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
                <h3 className="text-lg font-semibold text-neutral-200">
                 How much will my website cost?
                </h3>
                <p className="mt-2 text-neutral-400">
                    Pricing depends on the type of site (business, e-commerce, or web app) and the features you need. Once we discuss your project, I’ll give you a clear quote with no hidden costs. But to give you a rough idea, a basic business website usually starts around R1,750, while more complex sites can range from R2,550 to R12,550.
                </p>
            </div>
            {/* End Col */}

            <div>
                <h3 className="text-lg font-semibold text-neutral-200">
                Do you offer support after the website is launched?
                </h3>
                <p className="mt-2 text-neutral-400">
                    Yes. I offer different maintenance options, from fixing small issues to keeping everything updated and secure, so your site keeps running smoothly. Free support is also available for 30 days after launch to address any immediate concerns.
                </p>
            </div>
            {/* End Col */}

            <div>
                <h3 className="text-lg font-semibold text-neutral-200">
                 Will my website work on phones and tablets?
                </h3>
                <p className="mt-2 text-neutral-400">
                    Absolutely. Every site I build is fully responsive, meaning it looks and works great on desktops, tablets, and smartphones.
                </p>
            </div>
            {/* End Col */}

            <div>
                <h3 className="text-lg font-semibold text-neutral-200">
                  Can I update the website myself after it’s finished?
                </h3>
                <p className="mt-2 text-neutral-400">
                    Yes. If you choose a web application with an admin panel or a blog, you’ll be able to log in and make updates anytime. For simpler websites, I can set up easy tools so you can manage content without coding.
                </p>
            </div>
            {/* End Col */}

            <div>
                <h3 className="text-lg font-semibold text-neutral-200">
                 Do I need to provide the content and images?
                </h3>
                <p className="mt-2 text-neutral-400">
                    Yes, usually clients provide the text, images, and branding (like a logo). If you don’t have these, I can guide you on what’s needed or suggest resources to help.
                </p>
            </div>
            {/* End Col */}

            <div>
                <h3 className="text-lg font-semibold text-neutral-200">
                    How long does it take to build a website?
                </h3>
                <p className="mt-2 text-neutral-400">
                    It depends on the type of site. A basic business website can take 1–2 weeks, while an e-commerce site or web application with custom features may take 3–5 weeks. I’ll always give you a clear timeline before starting.
                </p>
            </div>
            {/* End Col */}
            </div>
            {/* End Grid */}
        </div>
        </div>
      {/* End FAQ */} 
    </>
  )
}

export default FAQ
