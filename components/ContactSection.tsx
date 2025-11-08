import React from 'react';
import { ICONS } from '../constants';

const contactLinks = [
  { Icon: ICONS.Github, user: '@martinulii', href: 'https://github.com/martinulii' },
  { Icon: ICONS.Instagram, user: '@martinulii_', href: 'https://www.instagram.com/martinulii_' },
  { Icon: ICONS.Youtube, user: '@marsmusic_', href: 'https://www.youtube.com/@marsmusic_' },
  { Icon: ICONS.Music, user: '@marsmusic (Spotify)', href: 'https://open.spotify.com/artist/1aIkNbt5mYoc6QtNhCOhIn' },
  { Icon: ICONS.Mail, user: 'marti.losmar@gmail.com', href: 'mailto:marti.losmar@gmail.com' },
];

interface ContactSectionProps {
  showTitle?: boolean;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ showTitle = true, className = '' }) => {
  return (
    <section aria-labelledby={showTitle ? "contact-title" : undefined} className={className}>
      {showTitle && (
        <h2 id="contact-title" className="text-3xl font-bold text-center mb-8 text-[--branch-color-main]">
          Contacte
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center gap-x-4 transition-transform hover:scale-105 hover:bg-gray-700/80"
          >
            <link.Icon className="w-7 h-7 text-[--branch-color-main]" />
            <span className="font-semibold text-white">{link.user}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;