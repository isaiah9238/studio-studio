"use client"

import { ScryingPool } from '@/components/dashboard/ScryingPool';
import { ThePulse } from '@/components/dashboard/ThePulse';
import { VaultMap } from '@/components/dashboard/VaultMap';
import { LibrariansDesk } from '@/components/dashboard/LibrariansDesk';

export default function DashboardPage() {
  return (
    <main className="h-screen w-screen bg-background flex flex-col p-4 gap-4 select-none">
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-4 h-[40%]">
        <div className="col-span-8">
          <ScryingPool />
        </div>
        <div className="col-span-4">
          <ThePulse />
        </div>
      </div>

      {/* Middle Section (Vault Map) */}
      <div className="flex-1 min-h-0">
        <VaultMap />
      </div>

      {/* Bottom Section (Librarian's Desk) */}
      <div className="h-16 shrink-0">
        <LibrariansDesk />
      </div>

      {/* Decorative Branding / HUD elements */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="fixed top-1/2 right-0 translate-y-[-50%] p-1 text-[10px] font-code text-primary/20 [writing-mode:vertical-rl] tracking-[0.5em] pointer-events-none uppercase">
        THE_ALCHEMIST_FORTRESS_V1.0 // SYSTEM_STABLE
      </div>
      
      <div className="fixed top-1/2 left-0 translate-y-[-50%] p-1 text-[10px] font-code text-primary/20 [writing-mode:vertical-rl] tracking-[0.5em] pointer-events-none rotate-180 uppercase">
        NIX_ENVIRONMENT_ISOLATED // VERIFIED_HANDSHAKE
      </div>
    </main>
  );
}
