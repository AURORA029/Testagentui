import { ArrowRight } from 'lucide-react';
import { useWaitlistForm } from '../../hooks/useWaitlistForm';
import Input from '../ui/Input';
import Button from '../ui/Button';
import SuccessMessage from '../ui/SuccessMessage';
import { WaitlistSocialProof } from './WaitlistHero';

export default function WaitlistForm() {
  const { email, setEmail, submitted, handleSubmit } = useWaitlistForm();

  return (
    <>
      {/* Form or Success */}
      {submitted ? (
        <SuccessMessage 
          message="Email enregistré !"
          subtitle="Nous vous contacterons dès le lancement."
        />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
          />
          <Button type="submit" variant="primary">
            Rejoindre la liste d'attente
            <ArrowRight size={14} strokeWidth={2} />
          </Button>
        </form>
      )}

      {/* Social proof */}
      <WaitlistSocialProof />
    </>
  );
}
