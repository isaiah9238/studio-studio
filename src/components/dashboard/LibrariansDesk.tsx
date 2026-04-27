
"use client"

import { useState, useEffect } from 'react';
import { useConveyor } from '@/hooks/useConveyor';
import { 
  Database, 
  Settings, 
  HelpCircle, 
  ShieldCheck,
  ChevronRight,
  Monitor,
  Activity
} from 'lucide-react';

export function LibrariansDesk() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const { data: commandLog, persist: logCommand } = useConveyor<string[]>('commands', []);
  const [input, setInput] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newLog = [...commandLog.slice(-5), `> ${input}`];
    logCommand(newLog);
    setInput('');
  };

  return (
    <div className="h-full bg-card border-t border-primary/20 p-2 flex flex-col md:flex-row items-center gap-4 md:gap-6 relative shadow-[0_-5px_20px_rgba(0,229,255,0.03)]">
      {/* System Status Indicators */}
      <div className="flex items-center gap-4 md:gap-6 px-4 md:border-r border-primary/10 w-full md:w-auto overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 group cursor-help shrink-0">
          <Database className="w-3 h-3 text-primary group-hover:animate-bounce" />
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[9px] text-muted-foreground leading-none mb-0.5">FIRESTORE_VFS</span>
            <span className="text-[9px] md:text-[10px] font-bold text-primary leading-none">CONNECTED</span>
          </div>
        </div>
        <div className="flex items-center gap-2 group cursor-help shrink-0">
          <ShieldCheck className="w-3 h-3 text-primary group-hover:animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[9px] text-muted-foreground leading-none mb-0.5">SECURITY</span>
            <span className="text-[9px] md:text-[10px] font-bold text-primary leading-none">ISOLATED</span>
          </div>
        </div>
        <div className="flex items-center gap-2 group cursor-help shrink-0">
          <Activity className="w-3 h-3 text-accent animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[9px] text-muted-foreground leading-none mb-0.5">AICA_CORE</span>
            <span className="text-[9px] md:text-[10px] font-bold text-accent leading-none">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Command Interface */}
      <div className="flex-1 flex items-center gap-3 bg-background/50 rounded px-3 py-1 border border-primary/5 w-full">
        <ChevronRight className="w-4 h-4 text-primary" />
        <form onSubmit={handleCommand} className="flex-1">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER_COMMAND..."
            className="w-full bg-transparent border-none outline-none text-[10px] md:text-[11px] font-code text-primary placeholder:text-primary/20"
          />
        </form>
      </div>

      {/* Right side utilities */}
      <div className="flex items-center gap-4 md:gap-6 px-4 shrink-0">
        <div className="flex flex-col items-end">
          <span className="text-[8px] md:text-[9px] text-muted-foreground font-code leading-none mb-1">LOCAL</span>
          <span className="text-[10px] md:text-xs font-bold text-primary font-code leading-none">
            {mounted && currentTime ? currentTime.toLocaleTimeString([], { hour12: false }) : '--:--:--'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 border-l border-primary/10 pl-4 md:pl-6">
          <button className="p-1 hover:text-primary transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-1 hover:text-primary transition-colors">
            <HelpCircle className="w-4 h-4" />
          </button>
          <div className="ml-2 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 group cursor-pointer overflow-hidden">
            <Monitor className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
