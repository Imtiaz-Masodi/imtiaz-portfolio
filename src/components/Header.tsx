import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-18 mt-2 py-4 overflow-hidden z-10">
      <section className="container h-full flex items-center justify-between mx-auto px-8">
        <Logo />

        <div className="hidden md:block">
          <ul className="flex items-center space-x-8 text-base">
            <li>
              <a href="#projects" className="text-white hover:text-[#94a3b8]">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white hover:text-[#94a3b8]">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-[#94a3b8]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header;
