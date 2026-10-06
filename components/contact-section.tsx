'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@ashtinanto.dev' },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary/60">
            // 04
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="mt-3 font-body text-base text-muted-foreground">
            Ready to build something that breaks the mold? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl border border-primary/10 bg-card/40 p-6 backdrop-blur-sm hud-corners"
          >
            <div className="mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                Send Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-md border border-input bg-background/50 px-4 py-2.5 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                  data-cursor="hover"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-md border border-input bg-background/50 px-4 py-2.5 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                  data-cursor="hover"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-md border border-input bg-background/50 px-4 py-2.5 font-body text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Tell me about your project..."
                  data-cursor="hover"
                />
              </div>

              <button
                type="submit"
                data-cursor="hover"
                className="group relative flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.02]"
                style={{ boxShadow: '0 0 20px hsl(190 95% 50% / 0.4)' }}
              >
                {sent ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Transmission
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="relative rounded-xl border border-primary/10 bg-card/40 p-6 backdrop-blur-sm">
              <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-wider">
                Connect
              </h3>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                Find me across the digital realm. I&apos;m always open to
                collaborations, freelance work, and interesting conversations.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-cursor="hover"
                    className="group flex items-center gap-3 rounded-lg border border-primary/10 bg-card/30 p-3 transition-all hover:border-primary/40 hover:bg-primary/5"
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="font-body text-sm text-foreground">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status panel */}
            <div className="relative rounded-xl border border-primary/10 bg-card/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-primary glow-pulse" />
                <span className="font-display text-xs uppercase tracking-widest text-primary">
                  Available for Work
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Currently accepting new projects for Q4 2026. Average response
                time: under 24 hours.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-2 border-t border-primary/10 pt-8 text-center"
        >
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground/50">
            Ashtin Anto — 3D Gaming Portfolio
          </p>
          <p className="font-body text-xs text-muted-foreground/40">
            Built with Next.js, Three.js & a love for the craft
          </p>
        </motion.div>
      </div>
    </section>
  );
}
