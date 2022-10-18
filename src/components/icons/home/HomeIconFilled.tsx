import { HTMLAttributes } from 'react';

import { twc } from '~/utilities/twc';

interface HomeIconFilledProps extends HTMLAttributes<HTMLOrSVGElement> {
  invert?: boolean;
}

function HomeIconFilled(props: HomeIconFilledProps) {
  const { className, invert } = props;

  const baseStyles = 'h-6 aspect-square fill-black-base';
  const styles = twc(baseStyles, className, { 'fill-white': invert });

  return (
    <svg role="img" viewBox="0 0 24 24" className={styles}>
      <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
    </svg>
  );
}

export { HomeIconFilled };
