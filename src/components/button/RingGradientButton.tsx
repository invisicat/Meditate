import React from 'react';

import clsxm from '@/lib/clsxm';

type RingGradientButtonProps = {
  gradientFrom: string;
  gradientTo: string;
} & React.ComponentPropsWithRef<'button'>;

const RingGradientButton = React.forwardRef<
  HTMLButtonElement,
  RingGradientButtonProps
>((opts: RingGradientButtonProps, ref) => {
  return (
    <button
      ref={ref}
      className={clsxm(
        'text-sm leading-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg group bg-gradient-to-br hover:text-white dark:text-white focus:ring-4',
        `from-${opts.gradientFrom}`,
        `to-${opts.gradientTo}`,
        `group-hover:from-${opts.gradientFrom}`,
        `group-hover:to-${opts.gradientTo}`,
        `focus:ring-${opts.gradientFrom}`,
        `dark:focus:ring-${opts.gradientTo}`
      )}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {opts.children}
      </span>
    </button>
  );
});

export default RingGradientButton;
