import Badge from '../ui/Badge';
import { BRAND_TAGLINE, WAITLIST_COUNT } from '../../constants/config';

export default function WaitlistHero() {
  return (
    <>
      {/* Badge */}
      <Badge showIndicator={true}>
        Bientôt disponible
      </Badge>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
        {BRAND_TAGLINE.split(' ').slice(0, 2).join(' ')}<br />
        {BRAND_TAGLINE.split(' ').slice(2).join(' ')}
      </h1>

      {/* Subtitle */}
      <p className="text-base text-zinc-500 leading-relaxed mb-10 max-w-md">
        La première plateforme SaaS propulsée par l'IA pour développer votre
        confiance, votre clarté et votre impact à l'oral — à votre rythme.
      </p>
    </>
  );
}

export function WaitlistSocialProof() {
  return (
    <p className="mt-6 text-xs text-zinc-400">
      Rejoignez plus de <span className="text-zinc-900 font-medium">{WAITLIST_COUNT}</span> professionnels déjà inscrits.
    </p>
  );
}
