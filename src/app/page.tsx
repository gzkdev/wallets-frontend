"use client";

import WalletConnectorModal from "@/components/wallet-connector-modal";

export default function Home() {
  return (
    <div className="min-h-screen w-full items-center flex justify-center">
      <div className="max-w-7xl mx-auto p-6 space-y-10">
        {/* <div className="mx-auto size-10 rounded-full bg-black flex items-center justify-center">
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            Connect Wallet
          </button>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
            Switch Network
          </button>
        </div> */}

        <WalletConnectorModal />
      </div>
    </div>
  );
}
