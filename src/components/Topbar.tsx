'use client';

import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="w-full bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto container-lg px-4 py-2 text-sm flex items-center justify-between text-enkiNavy font-sans">
        <p>Worldwide shipping • Instant e-book download</p>

        <div className="flex items-center gap-3 opacity-80">
          <span className="hidden sm:inline">Secure checkout:</span>

          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            width={40}
            height={20}
            className="h-5 w-auto"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            width={40}
            height={20}
            className="h-5 w-auto"
          />
          <Image
            src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg"
            alt="American Express"
            width={40}
            height={20}
            className="h-5 w-auto"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            width={40}
            height={20}
            className="h-5 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
