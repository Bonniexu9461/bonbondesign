import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Work', path: '/#work' },
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } else {
        // If element not found (e.g. on another page), navigate to home then scroll
        // For simple SPA with all sections on home, this fallback might just navigate
        window.location.href = path;
      }
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="bg-[#5c5c5c]/50 backdrop-blur-xl rounded-full px-6 py-2 flex items-center justify-between shadow-2xl border border-white/10 max-w-6xl w-full">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex-shrink-0">
             <div className="flex items-center justify-center rounded-full px-3 py-1">
               <img src="/images/logo/bonbon-logo-white.svg" alt="bonbon logo" className="h-10 w-auto object-contain" />
             </div>
          </Link>
        </div>

        {/* Middle: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-12 flex-initial transform translate-x-[-80px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path)}
                className="text-white/90 hover:text-white text-[14px] font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.name}
              </a>
          ))}
        </nav>

        {/* Right: CTA Buttons */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-3">
            <a href="#process" onClick={(e) => {
              e.preventDefault();
              document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 py-2 h-auto text-[14px] font-bold tracking-wider whitespace-nowrap">
                ⚡️ Personalise Sprint
              </Button>
            </a>
            <a href="#footer-form" onClick={(e) => {
              e.preventDefault();
              document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button size="sm" className="bg-[#6214d9] hover:bg-[#5010b0] text-white rounded-full px-6 py-2 h-auto text-[14px] font-bold tracking-wider shadow-lg whitespace-nowrap">
                Book a Call
              </Button>
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="absolute top-20 left-4 right-4 bg-[#4a4a4a] rounded-2xl p-4 md:hidden border border-white/10 shadow-2xl"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="text-white/80 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-colors font-medium text-sm cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a href="#footer-form" onClick={(e) => {
              e.preventDefault();
              document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }} className="w-full mt-2">
              <Button className="w-full bg-[#6214d9] rounded-xl py-3 text-sm font-bold">
                Book a call
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
