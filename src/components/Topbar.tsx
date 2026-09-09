import React from 'react';

type Props = { page: string; onNavigate: (p:any)=>void; lang: string; setLang: (l:any)=>void; theme:string; setTheme:(t:any)=>void; t:(k:string)=>string };

export default function Topbar({ page, onNavigate, lang, setLang, theme, setTheme, t }: Props){
  return (
    <header className="topbar">
      <div className="search">
        <input placeholder={t('Search or paste link...')} aria-label="Search" />
      </div>
      <div className="controls">
        <select value={lang} onChange={e=>setLang(e.target.value)} aria-label="Language">
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
        <select value={theme} onChange={e=>setTheme(e.target.value)} aria-label="Theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
    </header>
  );
}
