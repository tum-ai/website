import React, { useEffect } from 'react';

type Props = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

export const FeatureBox: React.FC<Props> = ({ icon, title, children }) => {
  /*
    NOTE: add animations using animate.css (https://animate.style/)
    In particular, look at the "pulse" animation.
  */
  /* TODO: extend utilities API to include a higher border-width radius (e.g. rounded-10 for border-radius: 10px) */

  return (
    <div className="col-sm-6 col-md-5 col-lg-4 p-4">
      <div
        className="p-3 rounded-3 text-white text-center h-100"
        style={{ background: 'linear-gradient(39deg, #8d44e6, #6819e8), #282d32' }}
      >
        <i className={icon}></i>
        <h3 className="text-uppercase name fw-bold mb-2 mt-0">{title}</h3>
        <p className="my-5">{children}</p>
      </div>
    </div>
  );
};
