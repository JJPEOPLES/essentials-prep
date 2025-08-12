import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title-container">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;