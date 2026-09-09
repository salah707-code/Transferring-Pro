import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Downloads from './pages/Downloads';
import Uploads from './pages/Uploads';
import Queue from './pages/Queue';
import History from './pages/History';
import Scheduler from './pages/Scheduler';
import Settings from './pages/Settings';

import en from './i18n/en.json';
import ar from './i18n/ar.json';

export type Page = 'dashboard' | 'downloads' | 'uploads' | 'queue' | 'history' | 'scheduler' | 'settings';

const translations: Record<string, any> = { en, ar };

export default function App() {
  const [page, setPage] = useState<Page>('dashboard');
  const [lang, setLang] = useState<'en'|'ar'>('en');
  const [theme, setTheme] = useState<'light'|'dark'|'system'>('light');

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const t = (k: string) => translations[lang]?.[k] ?? k;

  return (
    <div className="app-shell">
      <Sidebar page={page} onNavigate={setPage} t={t} />
      <div className="main-area">
        <Topbar
          page={page}
          onNavigate={setPage}
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          t={t}
        />
        <main className="content">
          {page === 'dashboard' && <Dashboard t={t} />}
          {page === 'downloads' && <Downloads t={t} />}
          {page === 'uploads' && <Uploads t={t} />}
          {page === 'queue' && <Queue t={t} />}
          {page === 'history' && <History t={t} />}
          {page === 'scheduler' && <Scheduler t={t} />}
          {page === 'settings' && <Settings t={t} />}
        </main>
      </div>
    </div>
  );
}
