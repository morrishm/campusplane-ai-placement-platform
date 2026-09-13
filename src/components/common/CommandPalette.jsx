import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Code2,
  Database,
  ShieldCheck,
  Building2,
  GraduationCap,
  Layers,
  ArrowRight,
  X,
  CornerDownLeft
} from 'lucide-react';

const searchItems = [
  {
    category: 'Core Telemetry Engine',
    items: [
      { name: 'AST Codebase Telemetry', desc: 'Direct GitHub commit tree & AST parser', icon: Code2, href: '#scanner' },
      { name: 'pgvector Cosine Search', desc: 'High-dimensional semantic candidate match', icon: Database, href: '#telemetry' },
      { name: 'Architecture Blueprint', desc: 'System telemetry data plane pipeline', icon: Layers, href: '#architecture' },
    ],
  },
  {
    category: 'Ecosystem & Governance',
    items: [
      { name: '1-Student-1-Offer Policy', desc: 'Automated lock eliminating offer hoarding', icon: ShieldCheck, href: '#matrix' },
      { name: 'Engineering Student Radar', desc: 'Verified commit score and skill breakdown', icon: GraduationCap, href: '#readiness' },
      { name: 'Recruiter Filter Station', desc: 'Zero-resume semantic candidate search', icon: Building2, href: '#recruiters' },
    ],
  },
];

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  // Global Ctrl+K / Cmd+K listener to intercept default browser search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredGroups = searchItems.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose(false)}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search telemetry, roles, AST parser, bylaws..."
              className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
              ESC
            </kbd>
          </div>

          {/* Search Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-3">
            {filteredGroups.length === 0 ? (
              <div className="py-10 text-center text-xs text-slate-400 font-medium">
                No matching telemetry endpoints found for "{query}"
              </div>
            ) : (
              filteredGroups.map((group, gIdx) => (
                <div key={gIdx}>
                  <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {group.category}
                  </div>
                  <div className="space-y-1">
                    {group.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => onClose(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400">{item.desc}</div>
                          </div>
                        </div>
                        <CornerDownLeft className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-600 transition-colors opacity-0 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              pgvector similarity active
            </span>
            <span>Press Enter to select</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CommandPalette;