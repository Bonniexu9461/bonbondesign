import React from 'react';

const clients = [
  { name: 'Dominos', logo: '/images/clients/DominosPizza.svg' },
  { name: 'Entain', logo: '/images/clients/Entain_Logo.svg' },
  { name: 'Neds', logo: '/images/clients/neds logo.png' },
  // Duplicate for seamless marquee
  { name: 'Dominos', logo: '/images/clients/DominosPizza.svg' },
  { name: 'Entain', logo: '/images/clients/Entain_Logo.svg' },
  { name: 'Neds', logo: '/images/clients/neds logo.png' },
];

export const SocialProof = () => {
  return (
    <section className="py-16 border-y border-gray-100 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center min-w-[150px] opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center min-w-[150px] opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
