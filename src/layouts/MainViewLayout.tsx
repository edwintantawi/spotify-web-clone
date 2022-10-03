import { ReactNode } from 'react';

interface MainViewLayoutProps {
  children?: ReactNode;
}

function MainViewLayout(props: MainViewLayoutProps) {
  const { children } = props;

  return <main className="rounded-lg bg-black-base">{children}</main>;
}

export { MainViewLayout };
