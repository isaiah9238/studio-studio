"use client"

import { useState, useEffect } from 'react';
import { useConveyor } from '@/hooks/useConveyor';
import { 
  Database, 
  Settings, 
  HelpCircle, 
  Network, 
  ShieldCheck,
  ChevronRight,
  Monitor
} from 'lucide-react';

export function LibrariansDesk() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const { data: commandLog, persist: logCommand } = useConveyor<string[]>('commands', []);
  const [input, setInput] = useState('');

  useEffect(() => {
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
    <div className="h-full bg-card border-t border-primary/20 p-2 flex items-center gap-6 relative shadow-[0_-5px_20px_rgba(0,229,255,0.03)]">
      {/* System Status Indicators */}
      <div className="flex items-center gap-6 px-4 border-r border-primary/10">
        <div className="flex items-center gap-2 group cursor-help">
          <Database className="w-3 h-3 text-primary group-hover:animate-bounce" />
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground leading-none mb-0.5">FIRESTORE_VFS</span>
            <span className="text-[10px] font-bold text-primary leading-none">CONNECTED</span>
          </div>
        </div>
        <div className="flex items-center gap-2 group cursor-help">
          <ShieldCheck className="w-3 h-3 text-primary group-hover:animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground leading-none mb-0.5">SECURITY_LEVEL</span>
            <span className="text-[10px] font-bold text-primary leading-none">ULTRA_ISOLATED</span>
          </div>
        </div>
        <div className="flex items-center gap-2 group cursor-help">
          <Network className="w-3 h-3 text-primary" />
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground leading-none mb-0.5">DATA_CONVEYOR</span>
            <span className="text-[10px] font-bold text-primary leading-none">OPTIMIZED</span>
          </div>
        </div>
      </div>

      {/* Command Interface */}
      <div className="flex-1 flex items-center gap-3 bg-background/50 rounded px-3 py-1 border border-primary/5">
        <ChevronRight className="w-4 h-4 text-primary" />
        <form onSubmit={handleCommand} className="flex-1">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER_COMMAND_TO_LIBRARIAN..."
            className="w-full bg-transparent border-none outline-none text-[11px] font-code text-primary placeholder:text-primary/20"
          />
        </form>
      </div>

      {/* Right side utilities */}
      <div className="flex items-center gap-6 px-4">
        <div className="flex flex-col items-end">
          <span className="text-[9px] text-muted-foreground font-code leading-none mb-1">LOCAL_TIME</span>
          <span className="text-xs font-bold text-primary font-code leading-none">
            {currentTime ? currentTime.toLocaleTimeString([], { hour12: false }) : '--:--:--'}
          </span>
        </div>
        <div className="flex items-center gap-2 border-l border-primary/10 pl-6">
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
