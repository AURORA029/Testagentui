import { CheckCircle } from 'lucide-react';

export default function SuccessMessage({ message, subtitle }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-white px-5 py-4">
      <CheckCircle className="text-red-900 shrink-0" size={18} strokeWidth={1.5} />
      <p className="text-sm font-medium text-zinc-900">
        {message}{' '}
        {subtitle && (
          <span className="font-normal text-zinc-500">
            {subtitle}
          </span>
        )}
      </p>
    </div>
  );
}
