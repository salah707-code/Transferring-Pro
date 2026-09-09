import React from 'react';
export default function Uploads({ t }: any){
  return (
    <div>
      <h2>{t('Uploads')}</h2>
      <div className="card" style={{marginTop:12}}> 
        <p>{t('No uploads yet')}</p>
      </div>
    </div>
  );
}
