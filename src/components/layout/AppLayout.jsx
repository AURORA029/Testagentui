import { Home, Map, Mic, User } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../../constants/config';

const NAV_ITEMS = [
  { key: 'home', label: 'Accueil', icon: Home, to: '/', matches: ['/'] },
  { key: 'path', label: 'Parcours', icon: Map, to: '/parcours', matches: ['/parcours', '/lesson', '/quiz'] },
  { key: 'profile', label: 'Profil', icon: User, to: '/profil', matches: ['/profil'] }
];

function isRouteMatch(pathname, matchPath) {
  if (matchPath === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(matchPath);
}

export default function AppLayout() {
  const location = useLocation();

  const activeTitle =
    NAV_ITEMS.find((item) => item.matches.some((matchPath) => isRouteMatch(location.pathname, matchPath)))
      ?.label ?? BRAND_NAME;

  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-hidden overflow-x-hidden bg-gray-50">
      <div className="mx-auto flex h-full w-full max-w-md flex-col border-x border-red-200 bg-white">
        <header className="border-b border-red-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <Mic className="text-red-900" size={18} strokeWidth={1.8} />
            <span className="text-sm font-semibold tracking-tight text-red-900">{BRAND_NAME}</span>
          </div>
          <h1 className="mt-2 text-lg font-semibold text-zinc-900">{activeTitle}</h1>
        </header>

        <main className="flex-1 overflow-y-auto overscroll-none pb-20 px-4 py-5">
          <Outlet />
        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-red-200 bg-white/95 px-3 py-2 backdrop-blur">
          <div className="mx-auto w-full max-w-md">
            <ul className="grid grid-cols-3 gap-2">
              {NAV_ITEMS.map(({ key, label, icon: Icon, to, matches }) => {
                const isActive = matches.some((matchPath) => isRouteMatch(location.pathname, matchPath));
                const activeState = isActive
                  ? 'bg-red-900 text-white'
                  : 'border border-red-100 bg-white text-zinc-500';

                return (
                  <li key={key}>
                    <NavLink
                      to={to}
                      className={`flex w-full flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs font-medium transition-colors ${activeState}`}
                    >
                      <Icon size={16} strokeWidth={2} />
                      <span>{label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}