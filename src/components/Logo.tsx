import { useState } from 'react';
import originalLogo from '../assets/images/cred_sempre_logo.png';

interface LogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'hero';
  className?: string;
}

export function Logo({ variant = 'header', className = '' }: LogoProps) {
  const [imgSrc, setImgSrc] = useState<string>(originalLogo);

  // Height configurations per variant to ensure prominent visibility and strict original proportions
  const heightClass = {
    header: 'h-16 sm:h-20 md:h-24',
    footer: 'h-16 sm:h-20 md:h-24',
    compact: 'h-12 sm:h-14',
    hero: 'h-24 sm:h-28 md:h-36',
  }[variant];

  return (
    <div className={`inline-flex items-center select-none bg-white ${className}`}>
      <img
        src={imgSrc}
        alt="CRED SEMPRE + Soluções em Crédito"
        referrerPolicy="no-referrer"
        onError={() => {
          if (imgSrc !== '/logo.png') {
            setImgSrc('/logo.png');
          }
        }}
        className={`${heightClass} w-auto object-contain max-w-full bg-white`}
      />
    </div>
  );
}


