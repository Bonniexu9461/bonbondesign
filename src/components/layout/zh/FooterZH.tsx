import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { FooterContactFormZH } from '../../contact/zh/FooterContactFormZH';

export const FooterZH = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: '关于', path: '/zh#about' },
      { name: '作品', path: '/zh#work' },
      { name: '价格', path: '/zh#pricing' },
      { name: '服务', path: '/services' },
    ],
    legal: [
      { name: '隐私政策', path: '/privacy' },
      { name: '服务条款', path: '/terms' },
    ],
    social: [
      { name: 'Instagram', path: 'https://instagram.com', icon: Instagram },
      { name: 'LinkedIn', path: 'https://linkedin.com', icon: Linkedin },
      { name: 'Email', path: 'mailto:hello@bonbondesign.com.au', icon: Mail },
    ]
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes('#')) {
      e.preventDefault();
      const elementId = path.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Contact Form Section */}
        <div id="footer-form" className="mb-32">
          <FooterContactFormZH />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/zh" className="inline-block">
               <img src="/images/logo/bonbon-logo-white.svg" alt="bonbon logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-white/60 text-lg max-w-sm font-sans leading-relaxed">
              14 天快速交付的布里斯班网站设计。
              专业、高性能、为您量身定制。
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">公司</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">法律条款</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">联系我们</h4>
            <div className="space-y-4 text-white/70 text-sm font-medium leading-relaxed">
              <p>昆士兰州，布里斯班<br />澳大利亚</p>
              <a href="mailto:hello@bonbondesign.com.au" className="block hover:text-white transition-colors">
                hello@bonbondesign.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-medium">
            © {currentYear} Bonbon Design Studio. 保留所有权利。
          </p>
          <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
            <span>澳大利亚设计</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>布里斯班制造</span>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};
