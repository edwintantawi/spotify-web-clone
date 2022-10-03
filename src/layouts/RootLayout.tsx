import { ReactNode } from 'react';

interface RootLayoutProps {
  children?: ReactNode;
}

function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <div className="grid h-full grid-cols-[auto,1fr] grid-rows-[auto,1fr,auto] gap-2 bg-black-default p-2">
      {children}
    </div>
  );
}

export { RootLayout };
