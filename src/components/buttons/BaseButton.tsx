import { ElementType, HTMLAttributes } from 'react';

import { PropsWithAny } from '~/types/internal';

interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithAny {
  as?: ElementType;
}

function BaseButton(props: BaseButtonProps) {
  const { children, as = 'button', ...restProps } = props;

  const Element = as;

  return <Element {...restProps}>{children}</Element>;
}

export { BaseButton };
