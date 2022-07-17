import Image from 'next/image';
import React, { useEffect } from 'react';
import { PartnerCloseness } from '../lib/types';

type Props = {
  name: string;
  closeness: PartnerCloseness;
};

export const PartnerCol: React.FC<Props> = ({ name, closeness }) => {
  let colSize = 6;
  let placeholderSize = [300, 150];
  if (closeness === PartnerCloseness.HIGH) {
    colSize = 6;
    placeholderSize = [300, 150];
  }
  if (closeness === PartnerCloseness.MEDIUM) {
    colSize = 4;
    placeholderSize = [200, 100];
  }
  if (closeness === PartnerCloseness.LOW) {
    colSize = 2;
    placeholderSize = [130, 50];
  }
  return (
    <div
      className={`col-${colSize} text-center`}
      style={{ width: `${placeholderSize[0]}px`, height: `${placeholderSize[1]}px`, position: 'relative' }}
    >
      <p>{name}</p>
      <Image layout="fill" src={`https://via.placeholder.com/${placeholderSize.join('x')}.png`} />
    </div>
  );
};
