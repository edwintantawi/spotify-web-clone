import { ReactNode } from 'react';

interface BottomBarLayoutProps {
  children?: ReactNode;
}

function BottomBarLayout(props: BottomBarLayoutProps) {
  const { children } = props;

  return <div className="col-span-2 bg-black-default">{children}</div>;
}

export { BottomBarLayout };
