import { useState } from 'react';
import { Mic, CheckCircle, ArrowRight } from 'lucide-react';

const WAITLIST_COUNT = '1 200';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Mic className="text-zinc-900" size={20} strokeWidth={1.5} />
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            OratioAI
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            <span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">
              Bientôt disponible
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
            Maîtrisez<br />l'Art Oratoire
          </h1>

          {/* Subtitle */}
          <p className="text-base text-zinc-500 leading-relaxed mb-10 max-w-md">
            La première plateforme SaaS propulsée par l'IA pour développer votre
            confiance, votre clarté et votre impact à l'oral — à votre rythme.
          </p>

          {/* Form or Success */}
          {submitted ? (
            <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-4">
              <CheckCircle className="text-zinc-900 shrink-0" size={18} strokeWidth={1.5} />
              <p className="text-sm font-medium text-zinc-900">
                Email enregistré !{' '}
                <span className="font-normal text-zinc-500">
                  Nous vous contacterons dès le lancement.
                </span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700 active:bg-zinc-800 transition-colors whitespace-nowrap"
              >
                Rejoindre la liste d'attente
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          {/* Social proof */}
          <p className="mt-6 text-xs text-zinc-400">
            Rejoignez plus de <span className="text-zinc-900 font-medium">{WAITLIST_COUNT}</span> professionnels déjà inscrits.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            © 2026 OratioAI. Tous droits réservés.
          </span>
          <span className="text-xs text-zinc-400">
            Confidentiel · RGPD
          </span>
        </div>
      </footer>
    </div>
  );
}
