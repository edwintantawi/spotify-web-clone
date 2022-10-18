import {
  RootLayout,
  TopBarLayout,
  SidebarLayout,
  MainViewLayout,
  BottomBarLayout,
} from '~/layouts';

function App() {
  return (
    <RootLayout>
      <TopBarLayout>TOP-BAR</TopBarLayout>
      <SidebarLayout>SIDE-BAR</SidebarLayout>
      <MainViewLayout>MAIN-VIEW</MainViewLayout>
      <BottomBarLayout>BOTTOM-BAR</BottomBarLayout>
    </RootLayout>
  );
}

export { App };
