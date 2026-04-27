
"use client"

import { ScryingPool } from '@/components/dashboard/ScryingPool';
import { ThePulse } from '@/components/dashboard/ThePulse';
import { VaultMap } from '@/components/dashboard/VaultMap';
import { LibrariansDesk } from '@/components/dashboard/LibrariansDesk';

export default function DashboardPage() {
  return (
    <main className="min-h-screen md:h-screen w-screen bg-background flex flex-col p-2 md:p-4 gap-4 select-none overflow-x-hidden md:overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 h-auto md:h-[40%] min-h-0">
        <div className="w-full md:col-span-8 h-[300px] md:h-full min-h-0">
          <ScryingPool />
        </div>
        <div className="w-full md:col-span-4 h-[200px] md:h-full min-h-0">
          <ThePulse />
        </div>
      </div>

      {/* Middle Section (Vault Map) */}
      <div className="flex-1 min-h-[400px] md:min-h-0">
        <VaultMap />
      </div>

      {/* Bottom Section (Librarian's Desk) */}
      <div className="h-auto md:h-16 shrink-0 mt-auto">
        <LibrariansDesk />
      </div>

      {/* Decorative Branding / HUD elements - Hidden on mobile for clarity */}
      <div className="hidden md:block fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="hidden md:block fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="hidden lg:block fixed top-1/2 right-0 translate-y-[-50%] p-1 text-[10px] font-code text-primary/20 [writing-mode:vertical-rl] tracking-[0.5em] pointer-events-none uppercase">
        THE_ALCHEMIST_FORTRESS_V1.0 // SYSTEM_STABLE
      </div>
      
      <div className="hidden lg:block fixed top-1/2 left-0 translate-y-[-50%] p-1 text-[10px] font-code text-primary/20 [writing-mode:vertical-rl] tracking-[0.5em] pointer-events-none rotate-180 uppercase">
        NIX_ENVIRONMENT_ISOLATED // VERIFIED_HANDSHAKE
      </div>
    </main>
  );
}
