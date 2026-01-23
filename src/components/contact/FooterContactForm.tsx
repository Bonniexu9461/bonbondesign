import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

export const FooterContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    lookingFor: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { id: 'A', label: 'Website only (Essential plan)' },
    { id: 'B', label: 'Full branding + website (Professional plan)' },
    { id: 'C', label: 'Not sure yet - let\'s chat!' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace with your actual Web3Forms Access Key
          access_key: "c251cf6d-aba2-4c2a-8b7a-fab70bfd92ee", 
          ...formData,
          subject: "New Contact Form Submission from Bonbon Design Website",
          from_name: "Bonbon Design Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          lookingFor: '',
          message: ''
        });
        
        // Redirect to Cal.com after short delay
        setTimeout(() => {
          window.location.href = "https://cal.com/bonnie-xu-nowx9v/15min";
        }, 1500);
      } else {
        console.error("Form submission error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOptionSelect = (option: string) => {
    setFormData(prev => ({ ...prev, lookingFor: option }));
    setIsDropdownOpen(false);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2rem] w-full max-w-2xl mx-auto text-center border border-white/20 shadow-2xl"
      >
        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} />
        </div>
        <h3 className="text-3xl font-serif mb-4 text-white">Message Sent!</h3>
        <p className="text-white/80 text-lg mb-8">We'll get back to you within 24 hours.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Headline & Contact Details */}
        <div className="lg:col-span-5 text-left py-4">
          {/* Headline Section */}
          <div className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Hurry, only 3 spots left.</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-white leading-tight">
              <span className="font-sans font-medium">Are you</span> <br />
              <span className="font-serif italic font-normal">ready?</span>
            </h2>
            <p className="text-xl text-white/80 font-sans font-normal">
              This could be the start of something big.
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider opacity-50">Email</h4>
              <a href="mailto:hello@bonbondesign.com.au" className="block text-xl text-white font-medium hover:text-purple-300 transition-colors">
                hello@bonbondesign.com.au
              </a>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider opacity-50">Address</h4>
              <div className="text-xl text-white font-medium leading-relaxed">
                BONBON DESIGN<br />
                Brisbane, QLD<br />
                Australia
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 text-left">
          <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10">
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-bold text-white flex items-center gap-1">
                  Your name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500/50 focus:bg-white/15 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder:text-white/30 text-white text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-bold text-white flex items-center gap-1">
                  Email address <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500/50 focus:bg-white/15 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder:text-white/30 text-white text-sm"
                />
              </div>
            </div>

            {/* Business Name */}
            <div className="space-y-1.5">
              <label htmlFor="businessName" className="text-sm font-bold text-white flex items-center gap-1">
                What's your business name? <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500/50 focus:bg-white/15 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder:text-white/30 text-white text-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8b31ff] shadow-[0_0_10px_#8b31ff]" />
              </div>
            </div>

            {/* Looking For (Custom Select/Radio) */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-white flex items-center gap-1 justify-between cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="flex items-center gap-1">
                  What are you looking for? <span className="text-purple-400">*</span>
                </div>
                <ChevronDown size={16} className={`text-white/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </label>
              
              <div className="space-y-2">
                {options.map((option) => (
                  <div 
                    key={option.id}
                    onClick={() => handleOptionSelect(option.label)}
                    className={`
                      flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all border
                      ${formData.lookingFor === option.label 
                        ? 'bg-white/20 border-[#8b31ff] shadow-lg shadow-purple-500/20' 
                        : 'bg-white/5 border-transparent hover:bg-white/10'}
                    `}
                  >
                    <div className={`
                      w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold transition-colors
                      ${formData.lookingFor === option.label ? 'bg-[#8b31ff] text-white' : 'bg-white/20 text-white'}
                    `}>
                      {option.id}
                    </div>
                    <span className="text-white/90 text-sm font-medium">{option.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-bold text-white flex items-center gap-1">
                Let's talk about your company! <span className="text-white/40 font-normal text-xs">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500/50 focus:bg-white/15 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none placeholder:text-white/30 text-white text-sm"
                placeholder="e.g. I'm a local florist in Ashgrove looking for a new website to take online enquiries and showcase my work"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-[#8b31ff] hover:bg-[#7a2be0] text-white rounded-full py-3.5 text-base shadow-xl shadow-purple-500/30 border border-white/10"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Redirecting...' : 'Book 15-min call'}
            </Button>

          </form>
        </div>
      </div>
    </div>
  );
};
