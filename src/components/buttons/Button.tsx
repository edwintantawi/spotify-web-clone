import { ElementType, HTMLAttributes } from 'react';

import { twc } from '~/utilities/twc';
import { KeyValueFrom, PropsWithAny } from '~/types/internal';
import { BaseButton } from '~/components/buttons';
import { Typography } from '~/components/typography';

type Variant = 'contained' | 'outlined';
type VariantStyle = KeyValueFrom<Variant, string>;

const variantStyle: VariantStyle = {
  contained: 'bg-gray-base/10 hover:bg-gray-base/20',
  outlined: 'border border-gray-base/60 hover:border-white',
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithAny {
  variant?: Variant;
  pill?: boolean;
  as?: ElementType;
}

function Button(props: ButtonProps) {
  const { children, className, pill = false, variant = 'contained', ...restProps } = props;

  const baseStyles = 'h-8 flex items-center px-4 rounded-[4px] w-fit';
  const styles = twc(baseStyles, variantStyle[variant], className, { 'rounded-full': pill });
  const textStyles = twc('font-semibold text-white', className);

  return (
    <BaseButton className={styles} {...restProps}>
      <Typography as="span" variant="caption" className={textStyles}>
        {children}
      </Typography>
    </BaseButton>
  );
}

export { Button };
