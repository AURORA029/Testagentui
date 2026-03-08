import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WaitlistHero from './components/features/WaitlistHero';
import WaitlistForm from './components/features/WaitlistForm';

export default function Waitlist() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          <WaitlistHero />
          <WaitlistForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
