import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full px-5 py-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <a href="/">
          <img src={appleImg} alt="apple image" width={14} height={18} />
        </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists?.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white/80 transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline cursor-pointer gap-6 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search image" width={18} height={18} />
          <img src={bagImg} alt="bag image" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
