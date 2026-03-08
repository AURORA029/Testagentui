import { BRAND_NAME } from '../../constants/config';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xs text-zinc-400">
          © 2026 {BRAND_NAME}. Tous droits réservés.
        </span>
        <span className="text-xs text-zinc-400">
          Confidentiel · RGPD
        </span>
      </div>
    </footer>
  );
}
