import { FiGithub, FiMoon } from 'react-icons/fi';

import UnstyledLink from '@/components/links/UnstyledLink';
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="layout flex h-14 items-center justify-between mx-4">
        <UnstyledLink
          href="/"
          openNewTab={false}
          className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-spray-400 to-spray-800 transition-colors duration-300 hover:text-spray-900"
        >
          meditate.app
        </UnstyledLink>
        <div className="flex items-center">
          <nav>
            <ul className="flex items-center justify-between space-x-4">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className="hover:text-gray-600">
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 mx-2 dark:border-slate-800 justify-evenly">
            <div className="mx-2">
              <FiMoon className="w-6 h-6" />
            </div>
            <div>
              <FiGithub className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
