import { ReactNode } from 'react';

interface TopBarLayoutProps {
  children?: ReactNode;
}

function TopBarLayout(props: TopBarLayoutProps) {
  const { children } = props;

  return <div className="col-span-2 h-12 rounded-lg bg-black-base">{children}</div>;
}

export { TopBarLayout };
