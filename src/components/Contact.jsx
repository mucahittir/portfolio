import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export function Contact() {
  const { language, t } = useLanguage();
  const info = personalInfo[language] || personalInfo.tr;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission or mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Construct mailto link as direct fallthrough
      const mailtoUrl = `mailto:${info.email}?subject=${encodeURIComponent(
        formData.subject || t('contact.mailtoSubjectDefault')
      )}&body=${encodeURIComponent(
        `${t('contact.mailBodyName')}: ${formData.name}\n${t('contact.mailBodyEmail')}: ${formData.email}\n\n${t('contact.mailBodyMessage')}:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  const detailRow = 'flex items-center gap-3';
  const iconProps = { className: 'h-4 w-4 flex-shrink-0 text-ink3', strokeWidth: 1.5, 'aria-hidden': true };

  const fields = [
    { id: 'name', type: 'text', label: 'nameLabel', placeholder: 'namePlaceholder' },
    { id: 'email', type: 'email', label: 'emailInputLabel', placeholder: 'emailPlaceholder' },
    { id: 'subject', type: 'text', label: 'subjectLabel', placeholder: 'subjectPlaceholder', wide: true },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="surface p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-medium text-ink">{t('contact.detailsTitle')}</h3>

              <ul className="space-y-6">
                <li className={detailRow}>
                  <Mail {...iconProps} />
                  <div className="min-w-0">
                    <p className="meta">{t('contact.emailLabel')}</p>
                    <a
                      href={`mailto:${info.email}`}
                      className="mt-1 block break-all text-sm text-ink transition-colors duration-150 hover:text-accent"
                    >
                      {info.email}
                    </a>
                  </div>
                </li>
                <li className={detailRow}>
                  <MapPin {...iconProps} />
                  <div>
                    <p className="meta">{t('contact.locationLabel')}</p>
                    <p className="mt-1 text-sm text-ink">{info.location}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 border-t border-ink/10 pt-6">
                <p className="meta mb-4">{t('contact.socialLabel')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm" href={info.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    GitHub
                  </Button>
                  <Button variant="secondary" size="sm" href={info.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <div className="surface p-6 sm:p-8">
              <h3 className="text-lg font-medium text-ink">{t('contact.formTitle')}</h3>
              <p className="mb-6 mt-1 text-sm text-ink2">{t('contact.formSubtitle')}</p>

              {submitted ? (
                <div role="status" className="rounded-lg border border-ink/10 bg-raised p-6">
                  <Check className="mb-4 h-4 w-4 text-positive" strokeWidth={1.5} aria-hidden="true" />
                  <h4 className="text-base font-medium text-ink">{t('contact.successTitle')}</h4>
                  <p className="mb-6 mt-1 text-sm text-ink2">{t('contact.successDesc')}</p>
                  <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                    {t('contact.newMsgBtn')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {fields.map((field) => (
                      <div key={field.id} className={field.wide ? 'sm:col-span-2' : ''}>
                        <label htmlFor={field.id} className="mb-2 block text-sm text-ink2">
                          {t(`contact.${field.label}`)}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required
                          value={formData[field.id]}
                          onChange={handleChange}
                          placeholder={t(`contact.${field.placeholder}`)}
                          className="field"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-ink2">
                      {t('contact.messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.messagePlaceholder')}
                      className="field h-auto resize-none py-2"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      t('contact.sendingBtn')
                    ) : (
                      <>
                        <Send className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                        {t('contact.sendBtn')}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
