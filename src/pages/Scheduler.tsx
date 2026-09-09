import React from 'react';
export default function Scheduler({ t }: any){
  return (
    <div>
      <h2>{t('Scheduler')}</h2>
      <div className="card" style={{marginTop:12}}> 
        <p>{t('No schedules')}</p>
      </div>
    </div>
  );
}
