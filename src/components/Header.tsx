import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md ">
    <nav className="relative max-w-5xl w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 ps-5 pe-2 md:py-0 mx-2 lg:mx-auto">
        <div className="flex items-center">
        {/* Logo */}
        <Link to="Home" smooth={true} duration={500}>
            <img src="/logo.png" className="cursor-pointer" alt="logo" width={70} height={20} />
        </Link>
        {/* End Logo */}

        <div className="ms-1 sm:ms-2">

        </div>
        </div>

        {/* Button Group */}
        <div className="md:order-3 flex items-center gap-x-3">
        <div className="md:ps-3">
            <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden" href="#">
                Get a quote
            </a>
        </div>
        </div>
        {/* End Button Group */}

        {/* Collapse */}
        <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-2 md:py-0 md:ps-7">
            <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="/" aria-current="page">Home</a>
            <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="https://kgaugelo.vercel.app/" target='_blank'>Experience</a>
            <Link to="Client" smooth={true} duration={500}>   
                <p className="pe-3 ps-px cursor-pointer sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300">Client's projects</p>
            </Link>
        </div>
        </div>
        {/* End Collapse */}
    </nav>
    </header>
  )
}

export default Header
