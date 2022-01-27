import Link, { LinkProps } from 'next/link';
import React, { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & ComponentPropsWithRef<'a'>;

/**
 * A link that doesn't have any styles applied to it.
 * You're able to supply whatever you need to style it :p
 */
const UnstyledLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab = openNewTab != null || href.startsWith('/');
    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={clsxm('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
