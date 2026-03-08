import Button from '../ui/Button';
import { useUserStore } from '../../store/useUserStore';

export default function Onboarding() {
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);

  const handleInstallApp = () => {
    window.alert("Fonctionnalit\u00e9 d'installation en cours");
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-red-900 px-6 py-12 text-center">
      <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-red-800/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-red-950/70 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl border-2 border-red-700 bg-red-900/60 p-8 text-white backdrop-blur-sm">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-100">Agora x Madagascar</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight">Agorapp</h1>
        <p className="mt-4 text-base font-medium text-red-100">
          Ma&icirc;trisez la rh&eacute;torique malgache et l'art oratoire
        </p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={completeOnboarding}
            className="bg-white text-red-900 font-extrabold text-lg py-4 px-8 rounded-2xl border-b-4 border-gray-300 active:translate-y-1 active:border-b-0 transition-all"
          >
            Commencer l'aventure
          </button>

          <Button
            onClick={handleInstallApp}
            className="w-full justify-center rounded-2xl border-b-4 border-red-950 bg-red-800 py-4 text-base font-bold text-white active:translate-y-1 active:border-b-0"
          >
            Installer l'application
          </Button>
        </div>
      </div>
    </section>
  );
}
