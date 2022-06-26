import React, { useEffect } from 'react';
import { PartnerCloseness } from '../lib/types';

type Props = {
  name: string;
  closeness: PartnerCloseness;
};

export const PartnerCol: React.FC<Props> = ({ name, closeness }) => {
  let colSize = 6;
  let placeholderSize = '300x150';
  if (closeness === PartnerCloseness.HIGH) {
    colSize = 6;
    placeholderSize = '300x150'
  }
  if (closeness === PartnerCloseness.MEDIUM) {
    colSize = 4;
    placeholderSize = '200x100'
  }
  if (closeness === PartnerCloseness.LOW) {
    colSize = 2;
    placeholderSize = '130x50'
  }
  return <div className={`col-${colSize} text-center`}>
    {name}
    <img className="w-auto h-auto" src={`https://via.placeholder.com/${placeholderSize}.png`} />
  </div>;
};
