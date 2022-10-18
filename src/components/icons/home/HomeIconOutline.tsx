import { HTMLAttributes } from 'react';

import { twc } from '~/utilities/twc';

interface HomeIconOutlineProps extends HTMLAttributes<HTMLOrSVGElement> {
  invert?: boolean;
}

function HomeIconOutline(props: HomeIconOutlineProps) {
  const { className, invert } = props;

  const baseStyles = 'h-6 aspect-square fill-black-base';
  const styles = twc(baseStyles, className, { 'fill-white': invert });

  return (
    <svg role="img" viewBox="0 0 24 24" className={styles}>
      <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
    </svg>
  );
}

export { HomeIconOutline };