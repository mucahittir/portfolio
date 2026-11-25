import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/Button';
import { ServiceMap } from './ServiceMap';

const ease = [0.22, 1, 0.36, 1];

/** Fade and short rise on load, staggered by `order`. */
function Enter({ order = 0, className = '', children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: order * 0.06, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { language, t } = useLanguage();
  const info = personalInfo[language];

  return (
    <section
      id="hero"
      aria-label={t('nav.about')}
      className="flex min-h-[100svh] flex-col justify-center pb-12 pt-32 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Enter order={0} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-positive" aria-hidden="true" />
              <p className="meta">
                {info.statusBadge} · {info.location}
              </p>
            </Enter>

            <Enter order={1}>
              <h1 className="mt-6 text-display text-ink">{t('hero.headline')}</h1>
            </Enter>

            <Enter order={2}>
              <p className="mt-6 text-lg text-ink2 sm:text-xl sm:leading-8">
                <span className="text-ink">{info.name}</span>, {info.title}. {info.shortBio}
              </p>
            </Enter>

            <Enter order={3} className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Button variant="primary" size="lg" href="#projects">
                {t('hero.viewProjects')}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                {t('hero.contactMe')}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={info.resumeUrl}
                download
                title={t('hero.downloadCvTitle')}
              >
                <Download className="h-4 w-4" strokeWidth={1.5} />
                {t('hero.downloadCv')}
              </Button>
            </Enter>
          </div>

          <Enter order={4} className="lg:col-span-6">
            <ServiceMap />
          </Enter>
        </div>

        {/* Facts */}
        <Enter order={5}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-8 lg:grid-cols-4">
            {info.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="meta">{stat.label}</dt>
                <dd className="text-xl font-medium tabular-nums text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Enter>
      </div>
    </section>
  );
}
