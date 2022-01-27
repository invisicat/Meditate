import { ImFacebook, ImGithub, ImTwitter } from 'react-icons/im';

import UnstyledLink from '../links/UnstyledLink';

const Socials = [{ href: '/', icon: ImGithub }];

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-gray-900 text-gray-100">
      <div className="flex justify-center mb-6">
        {Socials.map(({ href, icon: Icon }, idx) => (
          <div className="flex justify-center mb-6" key={idx}>
            <UnstyledLink
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              href={href}
            >
              <Icon className="w-2 h-full mx-auto" />
            </UnstyledLink>
          </div>
        ))}
      </div>
      <div className="text-center p-4 text-gray-300 bg-slate-800">
        &copy; {new Date().getFullYear()} Made with 💘 by{' '}
        <UnstyledLink href="/">RiceCX.</UnstyledLink>
      </div>
    </footer>
  );
};

export default Footer;
