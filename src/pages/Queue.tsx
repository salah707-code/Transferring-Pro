import React from 'react';
export default function Queue({ t }: any){
  return (
    <div>
      <h2>{t('Queue')}</h2>
      <div className="card" style={{marginTop:12}}> 
        <p>{t('No queued transfers')}</p>
      </div>
    </div>
  );
}
