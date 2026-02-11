import React from 'react';

const Card = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`card h-100 shadow-sm border-0 ${className}`}>
      <div className="card-body">
        {title && <h5 className="fw-bold">{title}</h5>}
        {subtitle && <p className="text-secondary mb-2">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
