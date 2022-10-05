import { ReactNode } from 'react';

import { twc } from '~/utilities/twc';
import { KeyValueFrom } from '~/types/internal';
import { BaseButton } from '~/components/buttons';

type Variant = 'primary' | 'secondary';
type VariantStyle = KeyValueFrom<Variant, string>;

const variantStyle: VariantStyle = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

type Size = 'small' | 'medium';
type SizeStyle = KeyValueFrom<Size, string>;

const sizeStyle: SizeStyle = {
  small: 'w-8 [&>*]:w-4',
  medium: 'w-12 [&>*]:w-6',
};

interface IconButtonProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
}

function IconButton(props: IconButtonProps) {
  const { children, variant = 'secondary', size = 'medium', ...restProps } = props;

  const baseStyles = 'w-12 aspect-square flex items-center justify-center rounded-full';
  const styles = twc(baseStyles, variantStyle[variant], sizeStyle[size]);

  return (
    <BaseButton className={styles} {...restProps}>
      {children}
    </BaseButton>
  );
}

export { IconButton };
