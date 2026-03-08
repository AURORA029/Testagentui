import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useUserStore } from '../../store/useUserStore';

export default function Home() {
  const navigate = useNavigate();
  const xp = useUserStore((state) => state.xp);

  return (
    <section className="space-y-5">
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-red-600">Bienvenue</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">Votre QG Rhetorique</h2>
        <p className="mt-2 text-sm font-medium text-zinc-500">
          Continuez a progresser en rhetorique et en art oratoire malgache depuis votre mobile.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-gray-200 bg-white p-5">
        <p className="text-sm font-bold text-zinc-500">Experience totale</p>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-red-600">{xp} XP</p>
      </div>

      <Button onClick={() => navigate('/parcours')} className="w-full justify-center py-4 text-base">
        Reprendre mon parcours
      </Button>
    </section>
  );
}
