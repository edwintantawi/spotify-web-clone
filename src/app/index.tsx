import { Logo } from '~/components/Logo';

function App() {
  return (
    <div className="grid h-screen place-content-center bg-primary">
      <div>
        <Logo invert className="mx-auto mb-2 w-16" />
        <h1 className="text-4xl font-bold text-black">Spotify</h1>
      </div>
    </div>
  );
}

export { App };
