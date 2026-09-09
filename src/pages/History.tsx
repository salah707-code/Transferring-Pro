import React from 'react';
export default function History({ t }: any){
  return (
    <div>
      <h2>{t('History')}</h2>
      <div className="card" style={{marginTop:12}}> 
        <p>{t('No history yet')}</p>
      </div>
    </div>
  );
}
