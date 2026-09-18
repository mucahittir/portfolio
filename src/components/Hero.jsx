import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Github, Linkedin, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Giriş Bölümü"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs sm:text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Yeni Proje & Mimari Fırsatlarına Açık</span>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
              <MapPin className="w-3 h-3 text-accent" />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Main Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Merhaba, ben <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-blue-500">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200"
          >
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              href="#projects"
            >
              Projeleri İncele
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#contact"
            >
              <Mail className="w-4 h-4 text-accent" />
              İletişime Geç
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/mucahit-tiryaki-cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              title="Mücahit Tiryaki CV'sini İndir"
            >
              <Download className="w-4 h-4" />
              CV İndir
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-5 text-gray-500 dark:text-gray-400"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profili"
              className="p-2 rounded-xl hover:text-accent hover:bg-accent/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profili"
              className="p-2 rounded-xl hover:text-accent hover:bg-accent/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="E-posta Gönder"
              className="p-2 rounded-xl hover:text-accent hover:bg-accent/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Highlight Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-white/70 dark:bg-dark-card/70 border border-gray-200/80 dark:border-dark-border/80 text-center backdrop-blur-sm shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
