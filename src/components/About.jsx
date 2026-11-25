import React from 'react';
import { GraduationCap, Award, Tent, Swords, Puzzle, Gamepad2, Code2, Languages } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Reveal } from './ui/Reveal';

const iconMap = { Tent, Swords, Puzzle, Award, Gamepad2, Code2, Languages };
const iconProps = { className: 'h-4 w-4 flex-shrink-0 text-ink3', strokeWidth: 1.5, 'aria-hidden': true };

export function About() {
  const { language, t } = useLanguage();
  const info = personalInfo[language];
  const education = info.education[0];

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="mb-24 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="surface p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-medium text-ink">{t('about.devPhilosophy')}</h3>

              <div className="space-y-4">
                {info.bioParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-7 text-ink2">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-ink/10 pt-6 sm:grid-cols-2">
                {info.storyHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-ink">
                    <span className="marker" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="space-y-6 lg:col-span-5">
            <Card hoverEffect={false}>
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap {...iconProps} />
                <h3 className="text-base font-medium text-ink">{t('about.educationBadge')}</h3>
                <span className="meta ml-auto">{education.period}</span>
              </div>
              <p className="text-base text-ink">{education.degree}</p>
              <p className="mb-3 text-sm text-ink2">{education.school}</p>
              <p className="text-sm leading-6 text-ink3">{education.description}</p>
            </Card>

            <Card hoverEffect={false}>
              <div className="mb-4 flex items-center gap-3">
                <Award {...iconProps} />
                <h3 className="text-base font-medium text-ink">{t('about.certsBadge')}</h3>
              </div>
              <ul className="divide-y divide-ink/10">
                {info.certificates.map((cert) => {
                  const Icon = iconMap[cert.icon] || Award;
                  return (
                    <li key={cert.title} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                      <Icon {...iconProps} />
                      <div>
                        <p className="text-sm text-ink">{cert.title}</p>
                        <p className="meta mt-1">{cert.issuer}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </Reveal>
        </div>

        <Reveal>
          <div className="mb-8 max-w-2xl">
            <h3 className="text-2xl font-medium text-ink">{t('about.interestsTitle')}</h3>
            <p className="mt-2 text-sm text-ink2">{t('about.interestsSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {info.interests.map((interest) => {
              const Icon = iconMap[interest.icon] || Award;
              return (
                <Card key={interest.title}>
                  <Icon {...iconProps} />
                  <h4 className="mb-2 mt-4 text-base font-medium text-ink">{interest.title}</h4>
                  <p className="text-sm leading-6 text-ink2">{interest.description}</p>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
