import '../styles/styles.css'
import { FaTiktok, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";


const Footer = () => {
    function getCurrentYear(): number {
        return new Date().getFullYear();
    }

    const year = getCurrentYear();


  return (
    <footer className=" lg:grid lg:grid-cols-5 bg-gray-900">
        <div className="relative block h-32 lg:col-span-2 lg:h-full"> 
            <div className="container"></div>
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
                <p>
                <span className="text-xs tracking-wide uppercase text-gray-400">
                    Call me
                </span>

                <a
                    href="#"
                    className="block text-2xl font-medium hover:opacity-75 sm:text-3xl text-white"
                >
                    +27 74 763 9005
                </a>
                </p>

                <ul className="mt-8 space-y-1 text-sm text-gray-200">
                <li>Monday to Friday: 3pm - 9pm</li>
                <li>Weekend: 8am - 10pm</li>
                </ul>

                <ul className="mt-8 flex gap-6">
                <li>
                    <a
                    href="https://www.tiktok.com/@roisetech"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                    >
                    <span className="sr-only">Tiktok</span>

                    <FaTiktok className="size-5" />
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.instagram.com/roisetech/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                    >
                    <span className="sr-only">Instagram</span>

                    <FaInstagram className="size-5" />
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.youtube.com/@roisetech"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                    >
                    <span className="sr-only">YouTube</span>

                    <FaYoutube className="size-5" />
                    </a>
                </li>

                <li>
                    <a
                    href="https://github.com/Roise-s"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                    >
                    <span className="sr-only">GitHub</span>

                    <FaGithub className="size-5" />
                    </a>
                </li>
                </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                <p className="font-medium text-white">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                    <li>
                    <a href="/" className="transition hover:opacity-75 text-gray-200">
                        Web Development
                    </a>
                    </li>

                    <li>
                    <a href="/" className="transition hover:opacity-75 text-gray-200">
                        Android and iOS Development
                    </a>
                    </li>

                    <li>
                    <a href="/laptop-repairs" className="transition hover:opacity-75 text-gray-200">
                        Laptop's and PC Repairs
                    </a>
                    </li>

                    <li>
                    <a href="/laptop-repairs" className="transition hover:opacity-75 text-gray-200">
                        Laptop and PC Builds
                    </a>
                    </li>
                </ul>
                </div>

                <div>
                <p className="font-medium text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                    <li>
                    <a href="https://kgaugelo.vercel.app/" className="transition hover:opacity-75 text-gray-200">
                        About Roise
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <div className="mt-12 border-t pt-12 border-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                    <a href="terms-of-service" className="transition hover:opacity-75 text-gray-400">
                    Terms & Conditions
                    </a>
                </li>

                <li>
                    <a href="/privacy-policy" className="transition hover:opacity-75 text-gray-400">
                    Privacy Policy
                    </a>
                </li>

                </ul>

                <p className="mt-8 text-xs sm:mt-0 text-gray-400">
                &copy; {year}. Roise Tech Inc. All rights reserved.
                </p>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
