import React from 'react';

export default function Dashboard({ t }: any){
  return (
    <div>
      <h2>{t('Dashboard')}</h2>
      <section className="card" style={{marginTop:12}}>
        <p>{t('No transfers yet')}</p>
        <p style={{color:'var(--muted)'}}>{t('Use the sidebar to add downloads or local transfers.')}</p>
      </section>
    </div>
  );
}
