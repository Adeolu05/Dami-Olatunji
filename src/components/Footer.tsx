import React from 'react';
import { InstagramIcon, YouTubeIcon, FacebookIcon, TikTokIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light py-12 border-t border-primary/10">
      <div className="max-w-4xl mx-auto px-6 text-center">


        <div className="flex justify-center space-x-8 mb-10">
          <a
            href="https://www.instagram.com/damiolatunji_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group bg-white shadow-sm"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://youtube.com/@damiolatunji"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group bg-white shadow-sm"
          >
            <span className="sr-only">YouTube</span>
            <YouTubeIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/damilola.oladele.9026"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group bg-white shadow-sm"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.tiktok.com/@damiolatunji_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group bg-white shadow-sm"
          >
            <span className="sr-only">TikTok</span>
            <TikTokIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-center items-center text-[10px] uppercase tracking-widest font-bold opacity-60 space-y-2 md:space-y-0 md:space-x-4">
          <p>© 2026 Dami Olatunji. All rights reserved.</p>
          <span className="hidden md:inline text-primary/20">•</span>
          <p>Made with ❤️ by <a href="https://dpeluola.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary">David Peluola</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;