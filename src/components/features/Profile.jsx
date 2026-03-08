import { BookOpen, Star } from 'lucide-react';
import { BRAND_NAME } from '../../constants/config';
import { useUserStore } from '../../store/useUserStore';

export default function Profile() {
  const xp = useUserStore((state) => state.xp);
  const unlockedModules = useUserStore((state) => state.unlockedModules);
  const resetProgress = useUserStore((state) => state.resetProgress);

  return (
    <section className="space-y-5">
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-red-600">Profil</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">{BRAND_NAME}</h2>
        <p className="mt-2 text-sm font-medium text-zinc-500">
          Suivez votre progression en rhetorique et en art oratoire malgache.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <article className="rounded-3xl border-2 border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-zinc-500">XP total accumule</p>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-red-200 bg-red-50 text-red-700">
              <Star size={18} strokeWidth={1.9} />
            </span>
          </div>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-red-600">{xp} XP</p>
        </article>

        <article className="rounded-3xl border-2 border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-zinc-500">Modules debloques</p>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-red-200 bg-red-50 text-red-700">
              <BookOpen size={18} strokeWidth={1.9} />
            </span>
          </div>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-red-600">{unlockedModules.length}</p>
        </article>
      </div>

      <div className="rounded-3xl border-2 border-gray-200 bg-white p-5">
        <button
          type="button"
          onClick={resetProgress}
          className="inline-flex items-center justify-center bg-red-100 text-red-700 font-bold rounded-2xl border-b-4 border-red-300 active:border-b-0 active:translate-y-1 transition-all px-4 py-2"
        >
          Reinitialiser ma progression
        </button>
        <p className="mt-2 text-xs font-medium text-zinc-500">
          Cette action remet l'XP a 0 et reverrouille les modules 2 et 3.
        </p>
      </div>
    </section>
  );
}
