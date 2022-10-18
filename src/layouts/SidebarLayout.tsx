import { ReactNode } from 'react';

interface SidebarLayoutProps {
  children?: ReactNode;
}

function SidebarLayout(props: SidebarLayoutProps) {
  const { children } = props;

  return <div className="w-60 rounded-lg bg-black-base">{children}</div>;
}

export { SidebarLayout };
