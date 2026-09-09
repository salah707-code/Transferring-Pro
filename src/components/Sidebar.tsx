import React from 'react';

type Props = { page: string; onNavigate: (p: any) => void; t: (k:string)=>string };

export default function Sidebar({ page, onNavigate, t }: Props){
  return (
    <aside className="sidebar">
      <div className="brand">Veltrix Transfer</div>
      <nav className="nav" aria-label="Main">
        <button className={page==='dashboard'? 'active': ''} onClick={()=>onNavigate('dashboard')}>{t('Dashboard')}</button>
        <button className={page==='downloads'? 'active': ''} onClick={()=>onNavigate('downloads')}>{t('Downloads')}</button>
        <button className={page==='uploads'? 'active': ''} onClick={()=>onNavigate('uploads')}>{t('Uploads')}</button>
        <button className={page==='queue'? 'active': ''} onClick={()=>onNavigate('queue')}>{t('Queue')}</button>
        <button className={page==='scheduler'? 'active': ''} onClick={()=>onNavigate('scheduler')}>{t('Scheduler')}</button>
        <button className={page==='history'? 'active': ''} onClick={()=>onNavigate('history')}>{t('History')}</button>
        <button className={page==='settings'? 'active': ''} onClick={()=>onNavigate('settings')}>{t('Settings')}</button>
      </nav>

      <div className="tools">
        <button className="icon-btn">+ {t('Add Link')}</button>
        <button className="icon-btn">+ {t('Add File')}</button>
      </div>
    </aside>
  );
}
