import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../../ui/Button';
import { Menu, X } from 'lucide-react';

export const HeaderZH = () => {
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: '关于', path: '/zh#about' },
    { name: '作品', path: '/zh#work' },
    { name: '特色', path: '/zh#features' },
    { name: '价格', path: '/zh#pricing' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes('#')) {
      e.preventDefault();
      const elementId = path.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } else {
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
      <div className="bg-[#5c5c5c]/50 backdrop-blur-xl rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-2xl border border-white/10 max-w-2xl w-full">
        
        <Link to="/zh" className="flex-shrink-0">
           <div className="flex items-center justify-center rounded-full px-3 py-1">
             <img src="/images/logo/bonbon-logo-white.svg" alt="bonbon logo" className="h-10 w-auto object-contain" />
           </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path)}
                className="text-white/90 hover:text-white text-[10px] uppercase tracking-wider font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
            <a href="#footer-form" onClick={(e) => {
              e.preventDefault();
              document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button size="sm" className="bg-[#6214d9] hover:bg-[#5010b0] text-white rounded-full px-6 py-2 h-auto text-[10px] font-bold uppercase tracking-wider shadow-lg">
                预约咨询
              </Button>
            </a>
            <a href="#process" onClick={(e) => {
              e.preventDefault();
              document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 py-2 h-auto text-[10px] font-bold uppercase tracking-wider">
                ⚡️ 定制开发方案
              </Button>
            </a>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

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
                预约咨询
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
