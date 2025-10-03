import Footer from "./Footer"
import Header from "./Header"
import { DialogTwo } from "./sub/Dialog2"

const LaptopRepairs = () => {
  return (
    <>
        <Header />
        <section className="bg-gray-900 h-screen">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Fast, reliable laptop repairs you can trust.</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Bringing broken laptops back to life with expert diagnostics, professional repairs, and a commitment to keeping your device running at its best.</p>
                    <span>
                        <DialogTwo />
                    </span>
                    <a href="/ViewStore" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                        View Store
                    </a> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/pngwing.com.png" alt="mockup" />
                </div>                
            </div>
        </section>
        <Footer />
    </>
  )
}

export default LaptopRepairs
