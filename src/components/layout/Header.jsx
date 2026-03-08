import { Mic } from 'lucide-react';
import { BRAND_NAME } from '../../constants/config';

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center gap-2">
        <Mic className="text-zinc-900" size={20} strokeWidth={1.5} />
        <span className="text-sm font-semibold tracking-tight text-zinc-900">
          {BRAND_NAME}
        </span>
      </div>
    </header>
  );
}
