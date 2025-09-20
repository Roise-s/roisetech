
const MainSection = () => {
  return (
    <section id="Home" className="grid h-5/6 place-content-center bg-gray-900">
        <div className="mx-auto mt-[50px] w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-prose text-center">
                <h1 className="text-4xl font-bold sm:text-5xl text-white">
                    Building the Digital Side of Your Story. With
                    <strong className="text-indigo-600"> Roise Tech </strong>
                </h1>

                <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-gray-200">
                    From design to development, I create digital spaces that reflect who you are, what you do, and the story you want the world to see.
                </p>

                <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                    <a
                    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                    href="#"
                    >
                    Get Started
                    </a>

                    <a
                    className="inline-block rounded border px-5 py-3 font-medium shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 border-gray-700 text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                    href="#"
                    >
                    Laptop repairs
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainSection
