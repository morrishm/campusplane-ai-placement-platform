import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/layout/Navbar';
import CommandPalette from '../components/common/CommandPalette';
import Hero from '../components/landing/Hero';

function LandingPage() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isArchOpen, setIsArchOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <Navbar 
        onOpenCommandPalette={() => setIsCommandOpen(true)}
        onOpenArchitecture={() => setIsArchOpen(true)}
      />

      {/* Global In-Page Spotlight Command Search */}
      <CommandPalette 
        isOpen={isCommandOpen} 
        onClose={setIsCommandOpen} 
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenArchitecture={() => setIsArchOpen(true)} />
      </main>
    </div>
  );
}

export default LandingPage;