import { HTMLAttributes } from 'react';

import { KeyValueFrom } from '~/types/internal';
import { twc } from '~/utilities/twc';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'caption';
type TypographyElement = Heading | 'p' | 'span';
type VariantStyle = KeyValueFrom<Variant, string>;

const variantStyle: VariantStyle = {
  h1: 'text-7xl font-bold text-white',
  h2: 'text-[2rem] font-bold text-white',
  h3: 'text-base font-bold text-white',
  body: 'text-base font-normal text-gray-base',
  subtitle: 'text-sm font-normal text-gray-base',
  caption: 'text-xs font-normal text-gray-base',
};

interface TypographyProps extends HTMLAttributes<unknown> {
  variant?: Variant;
  as?: TypographyElement;
}

function Typography(props: TypographyProps) {
  const { children, className, variant = 'body', as = 'p', ...restProps } = props;

  const Element = as;
  const baseStyles = 'tracking-wide';
  const styles = twc(baseStyles, variantStyle[variant], className);

  return (
    <Element className={styles} {...restProps}>
      {children}
    </Element>
  );
}

export { Typography };
