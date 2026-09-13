import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Code2,
  Database,
  ShieldCheck,
  Building2,
  GraduationCap,
  FileSpreadsheet,
  UserCheck,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Container from '../common/Container';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar({ onOpenCommandPalette, onOpenArchitecture }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [osKey, setOsKey] = useState('Ctrl');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || '');
      setOsKey(isMac ? '⌘' : 'Ctrl');
    }
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const coreFeatures = [
    {
      title: 'Skill & Project Verifier',
      description: 'AST parser checks genuine code logic vs copy-pasted templates.',
      icon: Code2,
      href: '#scanner',
    },
    {
      title: 'AI Job Matcher',
      description: 'pgvector cosine similarity matching with candidate skills.',
      icon: Database,
      href: '#telemetry',
    },
    {
      title: 'Live Interview Rounds',
      description: 'Real-time placement drive round tracking (Aptitude, Tech, HR).',
      icon: CheckCircle2,
      href: '#telemetry',
    },
    {
      title: 'Placement Reports',
      description: 'Institutional audit exports and batch placement analytics.',
      icon: FileSpreadsheet,
      href: '#matrix',
    },
  ];

  const solutionsList = [
    {
      title: 'For Engineering Students',
      description: 'Build a verified codebase profile and apply to curated drives.',
      icon: GraduationCap,
      href: '#readiness',
    },
    {
      title: 'For Company Recruiters',
      description: 'Post job requirements and filter by genuine coding benchmarks.',
      icon: Building2,
      href: '#recruiters',
    },
    {
      title: 'For TPO / College Admin',
      description: 'Coordinate drives, monitor student queues, and enforce offer limits.',
      icon: ShieldCheck,
      href: '#tpo',
    },
  ];

  const userPortals = [
    {
      title: 'Student Portal',
      subtitle: 'Profile & applications',
      role: 'Student',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: GraduationCap,
      href: '#login-student',
    },
    {
      title: 'Recruiter Workstation',
      subtitle: 'JD matching & shortlists',
      role: 'Company',
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
      icon: Building2,
      href: '#login-recruiter',
    },
    {
      title: 'TPO Command Center',
      subtitle: 'Drive schedule & policy lock',
      role: 'Admin',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      icon: UserCheck,
      href: '#login-tpo',
    },
  ];

  return (
    <>
      {/* 1. Main Desktop & Mobile Top Header Bar */}
      <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <Container className="flex h-16 sm:h-18 items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 select-none shrink-0">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-slate-950 text-white shadow-xs shrink-0">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="m10 9 2 2 4-4" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 leading-none">
                Campus<span className="text-orange-500">Plane</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5 leading-none">
                Placement Portal
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('features')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer',
                  activeDropdown === 'features' ? 'text-slate-950 bg-slate-100' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                )}
              >
                <span>Features & Tools</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === 'features' && 'rotate-180 text-orange-500')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'features' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-[460px] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {coreFeatures.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex flex-col p-2.5 rounded-xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-500 shrink-0">
                              <item.icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold text-slate-900 group-hover:text-orange-500 transition-colors whitespace-nowrap">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer',
                  activeDropdown === 'solutions' ? 'text-slate-950 bg-slate-100' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                )}
              >
                <span>Solutions</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === 'solutions' && 'rotate-180 text-orange-500')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-[380px] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 z-50"
                  >
                    <div className="space-y-1">
                      {solutionsList.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-500">
                            <item.icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-orange-500 transition-colors whitespace-nowrap">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#matrix"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              1-Student-1-Offer Rule
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 p-2 sm:px-3 sm:py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4 text-slate-500 shrink-0" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-block font-mono text-[10px] font-bold rounded bg-white px-1 py-0.5 text-slate-700 border border-slate-200">
                {osKey} K
              </kbd>
            </button>

            {/* Desktop Portals */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => handleMouseEnter('portals')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer whitespace-nowrap',
                  activeDropdown === 'portals' ? 'border-orange-300 bg-orange-50 text-orange-600' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                )}
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Login Portals</span>
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === 'portals' && 'rotate-180 text-orange-500')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'portals' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1.5 w-[320px] rounded-2xl border border-slate-200 bg-white p-2.5 shadow-2xl shadow-slate-900/10 z-50"
                  >
                    <div className="px-2.5 py-1 border-b border-slate-100 mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Portal
                    </div>
                    <div className="space-y-1">
                      {userPortals.map((portal, idx) => (
                        <a
                          key={idx}
                          href={portal.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all"
                        >
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700">
                            <portal.icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">{portal.title}</span>
                              <span className={cn('text-[9px] font-mono px-1.5 py-0.2 rounded border', portal.badgeColor)}>
                                {portal.role}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 truncate mt-0.5">{portal.subtitle}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Architecture Button */}
            <button
              onClick={onOpenArchitecture}
              className="hidden sm:flex items-center gap-1.5 rounded-xl bg-orange-500 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-orange-600 transition-all cursor-pointer whitespace-nowrap shadow-xs"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </Container>
      </header>

      {/* 2. TRUE FULLSCREEN MOBILE MODAL (Placed outside <header>, can NEVER get clipped) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-white flex flex-col lg:hidden"
          >
            {/* Modal Top Bar */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-slate-200 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                  <svg className="h-4 w-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                    <path d="m10 9 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  Campus<span className="text-orange-500">Plane</span>
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
              
              {/* Login Portals */}
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Choose Login Portal
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {userPortals.map((portal, idx) => (
                    <a
                      key={idx}
                      href={portal.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 active:bg-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <portal.icon className="w-4 h-4 text-orange-500 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">{portal.title}</div>
                          <div className="text-[10px] text-slate-500">{portal.subtitle}</div>
                        </div>
                      </div>
                      <span className={cn('text-[9px] font-mono px-2 py-0.5 rounded border', portal.badgeColor)}>
                        {portal.role}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Features & Tools */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Features & Tools
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {coreFeatures.map((feat, idx) => (
                    <a
                      key={idx}
                      href={feat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 active:bg-slate-100"
                    >
                      <feat.icon className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{feat.title}</div>
                        <div className="text-[10px] text-slate-500 leading-snug">{feat.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Solutions
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {solutionsList.map((sol, idx) => (
                    <a
                      key={idx}
                      href={sol.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 active:bg-slate-100"
                    >
                      <sol.icon className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{sol.title}</div>
                        <div className="text-[10px] text-slate-500 leading-snug">{sol.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Policy Link */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href="#matrix"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl border border-orange-200 bg-orange-50/60 active:bg-orange-100 text-orange-950 font-bold text-xs"
                >
                  <span>1-Student-1-Offer Policy Rule</span>
                  <ArrowRight className="w-4 h-4 text-orange-600" />
                </a>
              </div>

              {/* Architecture Button */}
              <div className="pt-2 pb-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenArchitecture) onOpenArchitecture();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-orange-500 text-white shadow-xs active:bg-orange-600"
                >
                  <Layers className="w-4 h-4" />
                  <span>Open System Architecture</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;