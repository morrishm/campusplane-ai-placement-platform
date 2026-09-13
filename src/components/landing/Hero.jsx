import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  ArrowRight,
  Users,
  FileText,
  Target,
  BrainCircuit,
  Award,
  SearchCheck,
  ChevronRight
} from 'lucide-react';
import Container from '../common/Container';

// Local campus photograph asset
import campusHeroImg from '../../assets/campus-her.jpeg';

// Looping keywords for character typewriter animation
const TYPEWRITER_PHRASES = [
  'Real Opportunities',
  'Verified Careers',
  'Direct Placements',
  'Merit-Based Offers',
];

// Sequential 4-step placement pipeline mapped to the bottom dock
const WORKFLOW_PIPELINE = [
  {
    step: '01',
    title: 'AI Resume Audit',
    desc: 'Extract skills & projects',
    icon: FileText,
  },
  {
    step: '02',
    title: 'JD Matcher',
    desc: 'Cosine similarity vs JD',
    icon: Target,
  },
  {
    step: '03',
    title: 'AI Skill Exam',
    desc: 'Adaptive screening test',
    icon: BrainCircuit,
  },
  {
    step: '04',
    title: 'TPO & Recruiter Desk',
    desc: 'Live scores & offer release',
    icon: Award,
  },
];

function Hero() {
  // Typewriter state management
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(85);

  // Character-by-character typewriter loop with realistic cadence
  useEffect(() => {
    let timer;
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          setTypingSpeed(75 + Math.random() * 20);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1900);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          setTypingSpeed(40);
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        setTypingSpeed(110);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className="relative overflow-hidden bg-white lg:h-[calc(100dvh-4.25rem)] flex flex-col justify-between pt-2 pb-2 sm:pt-4 sm:pb-3 border-b border-slate-200 select-none">
      
      {/* ========================================================================= */}
      {/* 1. SEAMLESS NATURAL CAMPUS BACKDROP                                       */}
      {/* ========================================================================= */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[74%] h-full pointer-events-none z-0 overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.85) 24%, rgba(0,0,0,1) 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.85) 24%, rgba(0,0,0,1) 100%)',
        }}
      >
        <img
          src={campusHeroImg}
          alt="Campus Academic Infrastructure"
          className="w-full h-full object-cover object-center filter saturate-[1.10] contrast-[1.02]"
          loading="eager"
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. REALISTIC SUNLIT KITE & NATURAL THREAD (Strictly In Upper Sky)         */}
      {/* ========================================================================= */}
      <div className="absolute top-3 sm:top-5 right-4 sm:right-10 z-20 pointer-events-none select-none hidden sm:flex items-center gap-3.5">
        
        {/* Realistic Flowing Thread with Subtle Code Knot */}
        <div className="relative flex items-center">
          <svg className="w-32 sm:w-44 h-10 overflow-visible" viewBox="0 0 160 36" fill="none">
            {/* Natural Wind Sag Curve */}
            <path
              d="M 0 18 C 45 4, 95 30, 160 14"
              stroke="#ea580c"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />
            {/* Tiny delicate coder knot on thread */}
            <g transform="translate(75, 14)">
              <circle cx="0" cy="0" r="3" fill="#ea580c" opacity="0.8" />
              <text x="0" y="-5" textAnchor="middle" fill="#c2410c" fontSize="8" fontWeight="bold" fontFamily="monospace" opacity="0.9">
                &lt;/&gt;
              </text>
            </g>
          </svg>
        </div>

        {/* Clean Artistic Sky Motto */}
        <div className="font-serif italic text-xs sm:text-sm text-slate-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] whitespace-nowrap flex items-center gap-1.5 pr-1">
          <span>Our Campus • Our Talent •</span>
          <span className="text-orange-600 font-bold not-italic font-sans tracking-wide">
            A Brighter Tomorrow
          </span>
        </div>

        {/* Realistic 3D Translucent Flying Patang */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [15, 19, 15],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          className="relative shrink-0 filter drop-shadow-[0_10px_16px_rgba(234,88,12,0.22)]"
        >
          <svg className="w-14 h-16 sm:w-16 sm:h-18 overflow-visible" viewBox="0 0 100 120" fill="none">
            <defs>
              {/* Paper Sheen Sunlight Gradient (Left Wing) */}
              <linearGradient id="kiteLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="60%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>

              {/* Sun Backlight Gradient (Right Wing) */}
              <linearGradient id="kiteRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="40%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>

              {/* Lower Shaded Facet */}
              <linearGradient id="kiteBottom" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
            </defs>

            {/* Translucent Diamond Paper Body */}
            <polygon points="50,6 8,50 50,50" fill="url(#kiteLeft)" opacity="0.96" />
            <polygon points="50,6 92,50 50,50" fill="url(#kiteRight)" opacity="0.94" />
            <polygon points="50,50 8,50 50,102" fill="url(#kiteBottom)" opacity="0.95" />
            <polygon points="50,50 92,50 50,102" fill="url(#kiteLeft)" opacity="0.96" />

            {/* Corner Paper Reinforcement Patches (Authentic Patang Detail) */}
            <polygon points="8,50 18,45 18,55" fill="#c2410c" opacity="0.8" />
            <polygon points="92,50 82,45 82,55" fill="#ea580c" opacity="0.8" />
            <polygon points="50,6 45,14 55,14" fill="#ea580c" opacity="0.8" />

            {/* Curved Bamboo Bow (Kampa) */}
            <path
              d="M 8 50 Q 50 26 92 50"
              stroke="#ffedd5"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* Straight Center Bamboo Spine (Thadda) */}
            <line
              x1="50"
              y1="6"
              x2="50"
              y2="104"
              stroke="#fff7ed"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* Watermark Code Stamp */}
            <text
              x="50"
              y="53"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="900"
              fontFamily="monospace"
              opacity="0.85"
              letterSpacing="1"
            >
              &lt;/&gt;
            </text>

            {/* Bottom Stabilizer Triangle + Crepe Paper Tail Ribbons */}
            <g transform="translate(50, 102)">
              {/* Triangular Paper Tail */}
              <polygon points="0,0 -9,12 9,12" fill="#ea580c" />
              <line x1="0" y1="0" x2="0" y2="12" stroke="#fff7ed" strokeWidth="1.5" />

              {/* Fluttering Ribbon Tails */}
              <path
                d="M -3 12 Q -8 20 -2 28 Q 4 36 -2 44"
                stroke="#f97316"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 3 12 Q 9 22 3 32 Q -3 40 3 48"
                stroke="#ea580c"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </svg>
        </motion.div>

      </div>

      <Container className="relative z-10 w-full flex-1 flex flex-col justify-between h-full">
        
        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 my-auto pt-1">
          
          {/* ========================================================================= */}
          {/* 3. LEFT COLUMN: Headline Pitch, Typewriter & CTAs                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-3 sm:space-y-4">
            
            {/* Academic Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/95 px-3.5 py-1 text-xs font-semibold text-orange-700 shadow-2xs backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Centralized Campus Placement Portal</span>
            </div>

            {/* Headline with Typewriter Loop */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 leading-[1.12]">
              Turning <br />
              Student Code into <br />
              <span className="text-orange-500 inline-flex items-baseline min-h-[1.25em]">
                <span>{displayText}</span>
                <span className="inline-block w-[3px] h-[0.9em] bg-orange-500 ml-1.5 animate-pulse" />
              </span>
            </h1>

            {/* Portal Workflow Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md font-normal">
              AI parses student resumes, matches verified skills against company job descriptions, runs automated screening exams, and delivers live scorecards to recruiters and TPO admins.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto pt-0.5">
              <a
                href="#scanner"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-orange-500/25 transition-all active:scale-95 cursor-pointer text-center"
              >
                <span>Run Candidate Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#matrix"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/95 hover:bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs transition-all active:scale-95 cursor-pointer text-center backdrop-blur-xs"
              >
                <SearchCheck className="w-4 h-4 text-orange-500" />
                <span>Check Eligibility</span>
              </a>
            </div>

            {/* Telemetry Metrics Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3.5 border-t border-slate-200/90 w-full max-w-md">
              <div className="text-left">
                <div className="flex items-center gap-1 text-base sm:text-lg font-black font-mono text-orange-500">
                  <Zap className="w-3.5 h-3.5 fill-orange-500 text-orange-500 shrink-0" />
                  <span>&lt; 18ms</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                  AI Match Latency
                </div>
              </div>

              <div className="text-left border-l border-slate-200 pl-2 sm:pl-4">
                <div className="flex items-center gap-1 text-base sm:text-lg font-black font-mono text-slate-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>100%</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                  Exam Verified
                </div>
              </div>

              <div className="text-left border-l border-slate-200 pl-2 sm:pl-4">
                <div className="flex items-center gap-1 text-base sm:text-lg font-black font-mono text-slate-900">
                  <Users className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>1 → 1</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                  Offer Enforced
                </div>
              </div>
            </div>

            {/* Handwritten Motto */}
            <div className="text-slate-400 text-[11px] font-serif italic -rotate-1 select-none">
              &ldquo;Real Students. Real Skills. Real Placements.&rdquo;
            </div>

          </div>

          {/* Right Column Spacer: Keeps central architecture, fountain and lawn completely visible */}
          <div className="lg:col-span-7 h-[340px] sm:h-[380px] pointer-events-none" />

        </div>

        {/* ========================================================================= */}
        {/* 4. EXACT BOTTOM WORKFLOW DOCK (Guaranteed Single Viewport Fit)             */}
        {/* ========================================================================= */}
        <div className="w-full relative z-30 pt-1 pb-1">
          <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.08)]">
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-1 items-center">
              {WORKFLOW_PIPELINE.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isLast = idx === WORKFLOW_PIPELINE.length - 1;

                return (
                  <div key={stage.step} className="flex items-center w-full">
                    
                    {/* Step Card Inner */}
                    <div className="flex-1 flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl hover:bg-orange-50/50 transition-colors text-left cursor-default">
                      
                      {/* Icon Box with Dark Step Number Badge */}
                      <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 border border-orange-200/80 text-orange-600 shadow-2xs">
                        <StageIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-slate-900 text-white font-mono text-[8px] sm:text-[9px] font-extrabold shadow-xs">
                          {stage.step}
                        </span>
                      </div>

                      {/* Text Details */}
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">
                          {stage.title}
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-medium text-slate-500 truncate mt-0.5">
                          {stage.desc}
                        </div>
                      </div>

                    </div>

                    {/* Directional Chevron Divider (→) */}
                    {!isLast && (
                      <div className="hidden lg:flex px-1 text-orange-500 shrink-0">
                        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}

export default Hero;