import { Lock, Play } from 'lucide-react';
import Button from './Button';

export default function ModuleCard({ title, description, isLocked = false, onStart }) {
  const cardState = isLocked ? 'border-gray-200 bg-gray-50' : 'border-gray-200 bg-white';

  return (
    <article className={`rounded-3xl border-2 p-5 ${cardState}`}>
      <div className="mb-4">
        <h3 className="text-base font-extrabold tracking-tight text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm font-medium text-zinc-500">{description}</p>
      </div>

      {isLocked ? (
        <Button variant="secondary" disabled className="w-full justify-center">
          <Lock size={16} strokeWidth={2} />
          Verrouille
        </Button>
      ) : (
        <Button variant="primary" onClick={onStart} className="w-full justify-center">
          <Play size={16} strokeWidth={2} />
          Commencer
        </Button>
      )}
    </article>
  );
}