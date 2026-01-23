import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { Calendar } from 'lucide-react';

export const MobileFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false); // Reset expansion when hidden
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
    }
    // If expanded, allow default link behavior (navigation)
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed bottom-6 z-50 md:hidden ${isExpanded ? 'left-4 right-4' : 'right-4'}`}
        >
          <a 
            href="#footer-form"
            onClick={(e) => {
              if (!isExpanded) {
                handleClick(e);
              } else {
                e.preventDefault();
                document.getElementById('footer-form')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="block w-full"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`bg-[#6214d9] hover:bg-[#5010b0] text-white shadow-xl shadow-purple-500/30 border-t border-white/20 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden ${
                isExpanded ? 'w-full py-4 px-6' : 'w-14 h-14'
              }`}
            >
              <motion.div layout className="flex items-center gap-2 whitespace-nowrap">
                <Calendar size={isExpanded ? 18 : 24} className="text-purple-200" />
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    transition={{ delay: 0.1 }}
                    className="font-bold tracking-wide"
                  >
                    Book 15-min call
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
