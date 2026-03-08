import { useState } from 'react';

export function useWaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Simulation de soumission
    setSubmitted(true);
    setEmail('');
  };

  const resetForm = () => {
    setEmail('');
    setSubmitted(false);
  };

  return {
    email,
    setEmail,
    submitted,
    handleSubmit,
    resetForm
  };
}
