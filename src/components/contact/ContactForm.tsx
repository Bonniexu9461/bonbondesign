import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
          subject: "New Contact Form Submission from Bonbon Design Website (Contact Page)",
          from_name: "Bonbon Design Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          lookingFor: '',
          message: ''
        });
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-3xl border border-green-100 text-center shadow-lg"
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-serif mb-2 text-[#0D0D0D]">Message Sent!</h3>
        <p className="text-[#928D89] mb-6">We'll get back to you within 24 hours.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="border-[#0D0D0D]/20 hover:bg-[#0D0D0D]/5">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
      
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-[#4a4a4a] flex items-center gap-1">
            Name <span className="bg-[#f0f0f0] text-[#4a4a4a] text-[10px] px-1.5 py-0.5 rounded-md">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder:text-[#b0b0b0]"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-[#4a4a4a] flex items-center gap-1">
            Email <span className="bg-[#f0f0f0] text-[#4a4a4a] text-[10px] px-1.5 py-0.5 rounded-md">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder:text-[#b0b0b0]"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-bold text-[#4a4a4a]">Company (Optional)</label>
        <div className="relative">
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-purple-500/20 outline-none transition-all placeholder:text-[#b0b0b0]"
            placeholder="Your Company Ltd"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8b31ff]" />
        </div>
      </div>

      {/* Looking For (Custom Select/Radio) */}
      <div className="space-y-3">
        <label className="text-sm font-bold text-[#4a4a4a] flex items-center gap-1 justify-between cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className="flex items-center gap-1">
            What are you looking for? <span className="bg-[#f0f0f0] text-[#4a4a4a] text-[10px] px-1.5 py-0.5 rounded-md">*</span>
          </div>
          <ChevronDown size={16} className={`text-[#928D89] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </label>
        
        <div className="space-y-2">
          {options.map((option) => (
            <div 
              key={option.id}
              onClick={() => handleOptionSelect(option.label)}
              className={`
                flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border
                ${formData.lookingFor === option.label 
                  ? 'bg-white border-[#8b31ff] shadow-md' 
                  : 'bg-[#f9f9f9] border-transparent hover:bg-[#f0f0f0]'}
              `}
            >
              <div className={`
                w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors
                ${formData.lookingFor === option.label ? 'bg-[#8b31ff] text-white' : 'bg-[#e0e0e0] text-white'}
              `}>
                {option.id}
              </div>
              <span className="text-[#4a4a4a] text-sm font-medium">{option.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-[#4a4a4a] flex items-center gap-1">
          Project Details <span className="bg-[#f0f0f0] text-[#4a4a4a] text-[10px] px-1.5 py-0.5 rounded-md">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none placeholder:text-[#b0b0b0]"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-[#8b31ff] hover:bg-[#7a2be0] text-white rounded-full py-4 text-lg shadow-xl"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};
