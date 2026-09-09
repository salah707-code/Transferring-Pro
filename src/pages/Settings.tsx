import React from 'react';
export default function Settings({ t }: any){
  return (
    <div>
      <h2>{t('Settings')}</h2>
      <div className="card" style={{marginTop:12}}> 
        <p>{t('Application settings will appear here.')}</p>
      </div>
    </div>
  );
}
