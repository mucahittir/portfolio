import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// TODO: illustrative architecture drawn from the stack in personal/experience data
// (JWT, .NET Core services, Docker, MSSQL). Not a live system; replace with a real diagram if desired.

/** Vertical connector with a mono step label beside it. */
function Link({ label, active = true }) {
  return (
    <div className="relative flex h-8 justify-center" aria-hidden="true">
      <span className={`block h-full w-px ${active ? 'bg-accent' : 'bg-ink/15'}`} />
      <span className="meta absolute left-1/2 top-1/2 ml-4 -translate-y-1/2">{label}</span>
    </div>
  );
}

function Node({ title, meta, active = false, className = '' }) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 ${
        active ? 'border-accent bg-raised' : 'border-ink/10 bg-raised/50'
      } ${className}`}
    >
      <p className={`text-sm font-medium ${active ? 'text-ink' : 'text-ink2'}`}>{title}</p>
      {meta && <p className="meta mt-1">{meta}</p>}
    </div>
  );
}

/** Request trace through gateway, services and database. */
export function ServiceMap() {
  const { t } = useLanguage();

  return (
    <figure
      className="surface overflow-hidden"
      aria-label={t('hero.map.caption')}
    >
      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
        <span className="meta">{t('hero.map.request')}</span>
        <span className="meta">{t('hero.map.caption')}</span>
      </div>

      <div className="p-5 sm:p-6">
        {/* Request */}
        <div className="flex items-center gap-3 rounded-lg border border-ink/10 bg-raised/50 px-4 py-3">
          <span className="rounded bg-raised px-1.5 py-0.5 font-mono text-xs text-accent">POST</span>
          <span className="font-mono text-sm text-ink">/api/tickets</span>
        </div>

        <Link label={t('hero.map.stepAuth')} />

        {/* Gateway */}
        <Node title={t('hero.map.gateway')} meta={t('hero.map.gatewayMeta')} />

        <Link label={t('hero.map.stepRoute')} />

        {/* Services inside Docker */}
        <div className="rounded-lg border border-dashed border-ink/20 p-3">
          <p className="meta mb-3">{t('hero.map.services')}</p>
          <div className="grid grid-cols-3 gap-2">
            <Node title={t('hero.map.warehouse')} className="px-3" />
            <Node title={t('hero.map.ticket')} active className="px-3" />
            <Node title={t('hero.map.workOrders')} className="px-3" />
          </div>
        </div>

        <Link label={t('hero.map.stepQuery')} />

        {/* Database */}
        <Node title={t('hero.map.database')} meta={t('hero.map.databaseMeta')} />
      </div>
    </figure>
  );
}
