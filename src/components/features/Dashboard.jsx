import { Lock, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { learningModules } from '../../data/moduleData';
import { useUserStore } from '../../store/useUserStore';

export default function Dashboard() {
  const navigate = useNavigate();
  const unlockedModules = useUserStore((state) => state.unlockedModules);
  const activeModuleId = unlockedModules.length > 0 ? Math.max(...unlockedModules) : 1;

  const handleStartModule = (moduleId) => {
    navigate(`/lesson/${moduleId}`);
  };

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-red-600">Chemin d'apprentissage</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">Carte de Rhetorique</h2>
        <p className="mt-2 text-sm font-medium text-zinc-500">
          Suivez la route de l'Agora et debloquez chaque niveau de persuasion.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white py-8">
        <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] -translate-x-1/2 border-l-2 border-dashed border-gray-300" />

        <div className="relative flex flex-col items-center space-y-8">
          {learningModules.map((module) => {
            const isLocked = !unlockedModules.includes(module.id);
            const isActive = module.id === activeModuleId && !isLocked;
            const offsetClass = module.id % 2 === 0 ? 'translate-x-12' : '-translate-x-12';
            const sizeClass = isActive ? 'h-24 w-24 text-xl' : 'h-20 w-20 text-lg';
            const nodeStyles = isLocked
              ? 'border-gray-300 border-b-[6px] bg-gray-200 text-gray-500'
              : isActive
                ? 'border-red-800 border-b-[6px] bg-red-600 text-white shadow-[0_4px_0_0_#7f1d1d] animate-pulse'
                : 'border-red-300 border-b-[6px] bg-white text-red-800 shadow-[0_4px_0_0_#fecaca]';

            return (
              <div key={module.id} className={`w-full ${offsetClass} flex flex-col items-center`}>
                <button
                  type="button"
                  disabled={isLocked}
                  onClick={() => handleStartModule(module.id)}
                  className={`flex items-center justify-center rounded-full border-4 font-extrabold transition-all ${sizeClass} ${nodeStyles} ${!isLocked ? 'active:translate-y-1 active:border-b-0' : ''}`}
                >
                  {isLocked ? <Lock size={22} strokeWidth={2.2} /> : <Play size={22} strokeWidth={2.4} />}
                </button>

                <div className="mt-3 max-w-[14rem] rounded-2xl border-2 border-gray-200 bg-gray-50 px-3 py-2 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-red-600">Niveau {module.id}</p>
                  <p className="mt-1 text-sm font-extrabold text-zinc-900">{module.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
