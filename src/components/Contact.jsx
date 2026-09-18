import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolyo İletişim Formu'
      )}&body=${encodeURIComponent(
        `İsim: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-dark-bg/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="İletişim"
          title="Birlikte Harika Projeler Üretelim"
          subtitle="Teknik bir problem, kurumsal bir proje veya kariyer fırsatı için bana dilediğiniz zaman ulaşabilirsiniz."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent" />
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">E-posta</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-200 group-hover:text-accent transition-colors break-all">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">Telefon</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-200 group-hover:text-accent transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">Konum</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-4 border-t border-gray-100 dark:border-dark-border/60">
                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                  Sosyal Profiller
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent border border-gray-200 dark:border-dark-border transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent border border-gray-200 dark:border-dark-border transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Mesaj Gönderin
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                Aşağıdaki formu doldurduğunuzda doğrudan e-posta istemciniz üzerinden iletilecektir.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                    Mesajınız Yönlendirildi!
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    E-posta istemciniz açıldı. En kısa sürede geri dönüş yapacağım.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Yeni Mesaj Gönder
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Adınız Soyadınız
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        E-posta Adresiniz
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ornek@sirket.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Konu
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Örn: Backend Mimari Danışmanlığı / İş Teklifi"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Projenizden veya görüşmek istediğiniz konudan bahsedin..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>İletiliyor...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Mesajı İlet</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
