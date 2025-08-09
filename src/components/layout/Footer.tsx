import React from 'react';
import { Section } from '@/components/ui/Section';
import { RocketIcon } from '@/components/icons/RocketIcon';

const footerSections = [
  {
    title: 'Features',
    links: [
      'Lead Management',
      'AI Lead Scoring',
      'Sales Automation',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Pricing', 'FAQ'],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-vibcrm-card-bg to-vibcrm-bg border-t border-white/8">
      <Section paddingY="xl" paddingX="xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10 lg:gap-16 xl:gap-20 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-vibcrm-primary/10 rounded-lg">
                <RocketIcon />
              </div>
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
                VibeCRM
              </span>
            </div>
            <p className="text-vibcrm-text-muted text-base md:text-lg leading-relaxed mb-6 max-w-md">
              The AI-powered CRM that helps sales teams close more deals faster with intelligent automation.
            </p>
            <div className="flex items-center gap-2 text-vibcrm-text-muted text-sm md:text-base">
              <svg className="w-4 h-4 text-vibcrm-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              support@vibcrm.com
            </div>
          </div>

          {/* Footer Link Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white text-base md:text-lg font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-vibcrm-text-muted text-sm md:text-base hover:text-vibcrm-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/8 pt-6 md:pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-vibcrm-text-muted text-sm hover:text-white transition-colors duration-300 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-vibcrm-text-muted text-sm text-center lg:text-right">
            © 2024 VibeCRM. Built with ❤️ by{' '}
            <a
              href="https://vibecatalog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vibcrm-primary hover:text-white transition-colors duration-300 hover:underline"
            >
              VibeCatalog.com
            </a>
          </p>
        </div>
      </Section>
    </footer>
  );
};
