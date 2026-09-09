import React from 'react';
export default function Downloads({ t }: any){
  return (
    <div>
      <h2>{t('Downloads')}</h2>
      <div className="card" style={{marginTop:12}}> 
        <p>{t('No downloads yet')}</p>
      </div>
    </div>
  );
}
